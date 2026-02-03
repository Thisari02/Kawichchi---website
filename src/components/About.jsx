import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <img src="/about-furniture.jpg" alt="Craftsmanship" className="md:w-1/2 rounded-xl shadow-xl" />
        <div className="md:w-1/2">
          <h2 className="text-4xl font-heading mb-6 text-primary">About Kawichchi</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">At Kawichchi by Siriwardana, we blend tradition and modern design to craft furniture that stands the test of time. Every piece is meticulously handcrafted, reflecting our passion for quality and sustainability.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Our artisans use ethically sourced teak and wood, combining skill and creativity to deliver furniture that is not just functional, but a statement of elegance and craftsmanship.</p>
          <motion.button whileHover={{ scale: 1.05, backgroundColor: '#2C2C2C', color: '#BFA57A' }} className="mt-6 px-8 py-3 border border-primary text-primary rounded transition">View Our Projects</motion.button>
        </div>
      </motion.div>
    </section>
  );
}
