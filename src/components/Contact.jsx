import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-heading mb-8 text-center text-primary"
        >
          Contact Us
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-lg mb-6 max-w-2xl mx-auto"
        >
          <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded" />
          <input type="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded" />
          <textarea placeholder="Message" className="p-3 border border-gray-300 rounded h-32"></textarea>
          <button className="px-6 py-3 bg-accent text-white rounded hover:bg-accent/90 transition">
            Send Message
          </button>
        </motion.form>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            💬 Chat with us on WhatsApp
          </a>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <iframe
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps?q=Colombo+Sri+Lanka&output=embed"
            loading="lazy"
            title="Kawichchi Location"
          />
        </motion.div>

        {/* Factory Location & Social Media */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-primary"
        >
          {/* Factory Location */}
          <div className="flex items-center gap-2">
            <HiLocationMarker className="text-accent text-2xl" />
            <span>123 Kawichchi St, Colombo, Sri Lanka</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
