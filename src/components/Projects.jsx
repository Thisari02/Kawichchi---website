import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl font-heading mb-10 text-center text-primary">Our Projects</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative cursor-pointer rounded-xl overflow-hidden shadow-xl hover:scale-105 transition">
              <img src={project.image} alt={project.title} className="w-full" />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">{project.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
