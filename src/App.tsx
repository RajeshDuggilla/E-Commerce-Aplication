import { useState, useMemo } from 'react';
import { ShoppingCart } from 'lucide-react';
import { products } from './data/products';
import { ProductCard } from './components/ProductCard';
import { Filters } from './components/Filters';
import { Cart } from './components/Cart';
import { CheckoutFlow } from './components/CheckoutFlow';
import { Footer } from './components/Footer';
import { Product, CartItem, FilterState, ShippingAddress, PaymentDetails } from './types';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    minPrice: 0,
    maxPrice: Infinity,
    search: '',
  });
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const categories = useMemo(
    () => ['All', ...new Set(products.map((p) => p.category))],
    []
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        !filters.category || filters.category === 'All'
          ? true
          : product.category === filters.category;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filters]);

  const addToCart = (product: Product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((items) =>
      quantity === 0
        ? items.filter((item) => item.id !== id)
        : items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleCheckoutComplete = (
    shippingAddress: ShippingAddress,
    paymentDetails: PaymentDetails
  ) => {
    console.log('Order completed:', { shippingAddress, paymentDetails });
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <header className="bg-white bg-opacity-90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            UsShopifyHub
            </h1>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8">
        {isCheckoutOpen ? (
          <CheckoutFlow
            items={cartItems}
            onComplete={handleCheckoutComplete}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-8">
            <div className="space-y-8">
              <Filters
                filters={filters}
                onFilterChange={setFilters}
                categories={categories}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            </div>
            {isCartOpen && (
              <Cart
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
                onCheckout={() => setIsCheckoutOpen(true)}
              />
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;