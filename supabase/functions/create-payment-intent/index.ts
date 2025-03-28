import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2.39.3";
import Stripe from "npm:stripe@14.18.0";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { items, shippingAddress } = await req.json();

    const total = items.reduce((sum: number, item: any) => 
      sum + (item.price * item.quantity), 0
    );
    const shipping = 9.99;
    const tax = total * 0.1;
    const finalTotal = Math.round((total + shipping + tax) * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: finalTotal,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        shipping_address: JSON.stringify(shippingAddress),
        items: JSON.stringify(items),
      },
    });

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});