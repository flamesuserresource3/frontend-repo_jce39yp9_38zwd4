import { Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <h3 className="text-lg font-semibold">InkCraft</h3>
            <p className="mt-2 text-sm text-gray-600 max-w-sm">
              Independent clothing label specializing in bold, long-lasting printed tees. Crafted for comfort. Built to express.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <p className="font-medium">Shop</p>
              <a href="#new" className="block text-gray-600 hover:text-black">New Arrivals</a>
              <a href="#best" className="block text-gray-600 hover:text-black">Best Sellers</a>
              <a href="#" className="block text-gray-600 hover:text-black">Size Guide</a>
            </div>
            <div className="space-y-2">
              <p className="font-medium">Support</p>
              <a href="#" className="block text-gray-600 hover:text-black">Shipping</a>
              <a href="#" className="block text-gray-600 hover:text-black">Returns</a>
              <a href="#" className="block text-gray-600 hover:text-black">Contact</a>
            </div>
          </div>
          <div className="md:justify-self-end">
            <p className="text-sm font-medium">Stay in the loop</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex items-center gap-2"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full max-w-xs rounded-lg border border-black/10 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
              />
              <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition">
                Subscribe
              </button>
            </form>
            <div className="mt-4 flex items-center gap-4 text-gray-600">
              <a href="#" aria-label="Instagram" className="hover:text-black"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-black"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-black"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} InkCraft Co. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
