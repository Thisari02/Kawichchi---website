import { useState } from "react";
import { motion } from "framer-motion";

import p1 from "../assets/project1.jpg";
import p2 from "../assets/project2.jpg";
import p3 from "../assets/project3.jpg";
import p4 from "../assets/project4.jpg";

const projects = [
  { id: 1, title: "Elegant Living Room", category: "Living Room", img: p1 },
  { id: 2, title: "Modern Bedroom", category: "Bedroom", img: p2 },
  { id: 3, title: "Office Workspace", category: "Office", img: p3 },
  { id: 4, title: "Custom Dining Set", category: "Living Room", img: p4 },
];

const categories = ["All", "Living Room", "Bedroom", "Office"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="bg-secondary py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Title */}
        <h2 className="font-heading text-4xl text-center text-primary mb-12">
          Our Projects
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded border text-sm transition
                ${
                  active === cat
                    ? "bg-accent text-white border-accent"
                    : "border-primary text-primary hover:bg-primary hover:text-secondary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filtered.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-64 w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-end">
                <p className="text-white p-4 font-medium">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
