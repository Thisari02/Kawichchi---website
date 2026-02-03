import { motion } from 'framer-motion';
import heroImage from '../assets/hero.jpg';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="home"
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-6">
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl text-white mb-6"
          >
            Crafted Furniture for Timeless Living
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-200 text-lg mb-10"
          >
            Premium handcrafted furniture blending tradition and modern elegance.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-accent px-8 py-3 rounded text-white font-medium hover:bg-white hover:text-accent transition"
          >
            View Our Products
          </motion.button>

        </div>
      </div>
    </motion.section>
  );
}
