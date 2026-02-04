import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-secondary py-24 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <h2 className="font-heading text-4xl text-center text-primary mb-16">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-lg shadow-lg space-y-6"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-black/20 px-4 py-3 rounded focus:outline-none focus:border-accent"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-black/20 px-4 py-3 rounded focus:outline-none focus:border-accent"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-black/20 px-4 py-3 rounded focus:outline-none focus:border-accent"
            ></textarea>

            <button className="bg-accent text-white px-8 py-3 rounded hover:bg-primary hover:text-accent transition">
              Send Message
            </button>
          </motion.form>

          {/* WhatsApp + Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/contact.jpg"
                alt="Contact"
                className="w-full h-64 object-cover"
              />
            </div>

            <a
              href="https://wa.me/947XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-lg hover:bg-[#128C7E] transition"
            >
              💬 Chat with Us on WhatsApp
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
