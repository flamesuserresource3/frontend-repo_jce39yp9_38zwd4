import { ShoppingCart, Shirt } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center">
            <Shirt className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-lg">InkCraft</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#new" className="text-gray-600 hover:text-black transition">New Arrivals</a>
          <a href="#best" className="text-gray-600 hover:text-black transition">Best Sellers</a>
          <a href="#about" className="text-gray-600 hover:text-black transition">About</a>
          <a href="#contact" className="text-gray-600 hover:text-black transition">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-sm font-medium shadow-sm hover:shadow transition bg-white">
          <ShoppingCart className="h-4 w-4" />
          Cart
        </button>
      </div>
    </header>
  );
}
