import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Clock, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-700/50">
          <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-gray-800 transition-all duration-300">
            <CreditCard className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors mb-4" />
            <div>
              <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">Secure Payment</h3>
              <p className="text-sm text-gray-400">All major cards accepted</p>
            </div>
          </div>
          <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-gray-800 transition-all duration-300">
            <Shield className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors mb-4" />
            <div>
              <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">Shop with Confidence</h3>
              <p className="text-sm text-gray-400">Our buyer protection covers you</p>
            </div>
          </div>
          <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-gray-800 transition-all duration-300">
            <Clock className="w-8 h-8 text-teal-400 group-hover:text-teal-300 transition-colors mb-4" />
            <div>
              <h3 className="font-semibold text-white group-hover:text-teal-300 transition-colors">24/7 Support</h3>
              <p className="text-sm text-gray-400">Round the clock assistance</p>
            </div>
          </div>
          <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-gray-800 transition-all duration-300">
            <Heart className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition-colors mb-4" />
            <div>
              <h3 className="font-semibold text-white group-hover:text-pink-300 transition-colors">Loyalty Rewards</h3>
              <p className="text-sm text-gray-400">Earn points with every purchase</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12 border-b border-gray-700/50">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Usshopifyhub
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Your one-stop destination for premium electronics, accessories, and home goods.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <span className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </span>
                <span className="text-sm">123 MNagar St, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-purple-500/10 transition-colors">
                  <Phone className="w-5 h-5 text-purple-400" />
                </span>
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 group">
                <span className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-teal-500/10 transition-colors">
                  <Mail className="w-5 h-5 text-teal-400" />
                </span>
                <span className="text-sm">support@Usshopifyhub.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-6">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/80 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Usshopifyhub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}