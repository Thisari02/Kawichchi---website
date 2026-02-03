import { motion } from 'framer-motion';
import aboutImage from '../assets/about.jpg';

export default function About() {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-14 items-center">
        
        <motion.img
          src={aboutImage}
          alt="Craftsmanship"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-lg shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl mb-4 text-primary">About Us</h2>
          <p className="italic text-muted mb-4">
            Quality Craftsmanship & Timeless Design
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Kawichchi, we take pride in creating bespoke furniture that transcends trends. Each piece is handcrafted with meticulous attention to detail, using ethically sourced materials and time-honoured techniques.
          </p>

          <button className="bg-accent px-6 py-3 rounded text-white hover:scale-105 transition">
            View Projects
          </button>
        </motion.div>

      </div>
    </section>
  );
}
