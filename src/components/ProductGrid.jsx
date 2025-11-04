import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Midnight Bloom Tee',
    price: 34,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 2,
    name: 'Neon Waves Tee',
    price: 32,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
    tag: 'Bestseller',
  },
  {
    id: 3,
    name: 'Retro Lines Tee',
    price: 29,
    image:
      'https://images.unsplash.com/photo-1520975659191-46ce1a42e49f?q=80&w=1600&auto=format&fit=crop',
    tag: 'Limited',
  },
  {
    id: 4,
    name: 'Solar Flare Tee',
    price: 35,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 5,
    name: 'Mono Type Tee',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
    tag: 'Classic',
  },
  {
    id: 6,
    name: 'Aurora Fade Tee',
    price: 36,
    image:
      'https://images.unsplash.com/photo-1520975659191-46ce1a42e49f?q=80&w=1600&auto=format&fit=crop',
    tag: 'Limited',
  },
];

function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-2xl bg-white border border-black/5 shadow-sm overflow-hidden"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/80 backdrop-blur px-2.5 py-1 text-xs font-medium shadow-sm">
          {product.tag}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold tracking-tight">{product.name}</h3>
          <span className="font-medium">${product.price}</span>
        </div>
        <button className="mt-3 inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50 transition">
          <ShoppingCart className="h-4 w-4" />
          Add to cart
        </button>
      </div>
    </motion.div>
  );
}

export default function ProductGrid() {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Printed Tees</h2>
          <p className="mt-1 text-gray-600">Artist-led designs on premium cotton. Fresh drops weekly.</p>
        </div>
        <a href="#" className="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-black">View all</a>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
