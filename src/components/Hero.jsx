import { motion } from 'framer-motion';
import heroImage from '../assets/hero.jpg';

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-6">
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-6">
            Crafted Furniture for Timeless Living
          </h1>
          <p className="text-gray-200 text-lg mb-10">
            Premium handcrafted furniture blending tradition and modern elegance.
          </p>

          <button className="bg-accent px-8 py-3 rounded text-white hover:bg-white hover:text-accent transition">
            View Our Products
          </button>
        </div>
      </div>
    </motion.section>
  );
}
