import { useState } from 'react';

const projectsData = [
  { id: 1, category: 'Home', title: 'Living Room Set', image: '/projects/living-room.jpg' },
  { id: 2, category: 'Office', title: 'Office Desk', image: '/projects/office-desk.jpg' },
  { id: 3, category: 'Custom', title: 'Dining Table', image: '/projects/dining-table.jpg' },
  { id: 4, category: 'Home', title: 'Bedroom Set', image: '/projects/bedroom.jpg' },
  { id: 5, category: 'Office', title: 'Meeting Room', image: '/projects/meeting-room.jpg' },
  { id: 6, category: 'Custom', title: 'TV Console', image: '/projects/tv-console.jpg' }
];

const categories = ['All','Home','Office','Custom'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredProjects = selectedCategory === 'All' ? projectsData : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-heading mb-10 text-center text-primary">Our Projects</h2>
        <div className="flex justify-center gap-6 mb-12">
          {categories.map(cat => (
            <button key={cat} className={`${selectedCategory === cat ? 'bg-accent text-white' : 'bg-white text-primary'} px-4 py-2 border rounded transition`} onClick={() => setSelectedCategory(cat)}>{cat}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="relative cursor-pointer rounded-xl overflow-hidden shadow-xl hover:scale-105 transition">
              <img src={project.image} alt={project.title} className="w-full" />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">{project.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
