import { motion } from 'framer-motion';
import { useState } from 'react';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Home', 'Office', 'Custom'];
  const filteredProjects = selectedCategory === 'All' ? projectsData : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-heading mb-10 text-center text-primary"
        >
          Our Projects
        </motion.h2>

        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              className={`${selectedCategory === cat ? 'bg-accent text-white' : 'bg-white text-primary border border-primary'} px-4 py-2 rounded transition hover:bg-accent hover:text-white`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded"
            >
              <img src={project.image} alt={project.title} className="h-60 w-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-white font-medium">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
