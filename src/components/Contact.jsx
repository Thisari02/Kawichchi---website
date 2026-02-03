import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="text-4xl font-heading mb-8 text-center text-primary">
          Contact Us
        </motion.h2>

        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-xl">
          <input type="text" placeholder="Your Name" className="p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded" />
          <textarea placeholder="Message" className="p-3 border rounded h-32"></textarea>
          <motion.button whileHover={{ scale: 1.05, backgroundColor: '#2C2C2C', color: '#BFA57A' }}
            className="px-6 py-3 bg-accent text-white rounded transition">
            Send Message
          </motion.button>
        </motion.form>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-6 text-center">
          <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-whatsapp text-white rounded hover:bg-green-700 transition">
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
