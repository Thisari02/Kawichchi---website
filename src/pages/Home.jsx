import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section id="home" className="h-[90vh] flex flex-col justify-center items-center text-center bg-[url('/hero-bg.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-3xl">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-6xl font-heading text-white mb-6">Crafted Furniture for Timeless Living</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }} className="text-lg md:text-xl text-gray-200 mb-10">Kawichchi by Siriwardana creates premium handcrafted furniture blending tradition, sustainability, and modern elegance.</motion.p>
        <motion.button whileHover={{ scale: 1.05, backgroundColor: '#2C2C2C', color: '#BFA57A' }} className="px-8 py-3 bg-accent text-white rounded transition">View Our Products</motion.button>
      </div>
    </section>
  );
}
