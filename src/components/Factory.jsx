import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Factory() {
  return (
    <section className="bg-secondary py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-3xl text-primary mb-8">
            Our Factory
          </h3>

          <p className="flex items-center gap-3 text-primary/80 mb-6">
            <MapPin size={20} className="text-accent flex-shrink-0" />
            Kawichchi Furniture Factory, Sri Lanka
          </p>

          <p className="flex items-center gap-3 text-primary/80 mb-6">
            <Phone size={20} className="text-accent flex-shrink-0" />
            +94 7X XXX XXXX
          </p>

          <p className="flex items-center gap-3 text-primary/80">
            <Mail size={20} className="text-accent flex-shrink-0" />
            info@kawichchi.lk
          </p>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps?q=Sri%20Lanka&output=embed"
            className="w-full h-72 border-0"
            loading="lazy"
            title="Kawichchi Factory Location"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}
