import { motion } from 'framer-motion';
import aboutImage from '../assets/about.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="bg-secondary py-24 border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src={aboutImage}
          alt="Craftsmanship"
          className="rounded-lg shadow-xl object-cover w-full h-[420px]"
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl text-primary mb-6">
            About Us
          </h2>

          <h3 className="text-lg font-medium italic text-muted mb-6">
            Quality Craftsmanship & Timeless Design
          </h3>

          <p className="text-primary/80 leading-relaxed mb-8">
            At <span className="font-medium">Kawichchi</span>, we take pride in creating
            bespoke furniture that brings warmth and elegance to your home.
            Our passion for craftsmanship ensures every piece is made with
            care, precision, and attention to detail.
          </p>

          <button className="px-8 py-3 border border-primary text-primary rounded hover:bg-primary hover:text-secondary transition">
            View Projects
          </button>
        </motion.div>

      </div>
    </section>
  );
}
