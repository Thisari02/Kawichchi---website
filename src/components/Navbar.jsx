import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="text-2xl font-heading text-primary">Kawichchi</div>
        
        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-accent transition">Home</a>
          <a href="#about" className="hover:text-accent transition">About</a>
          <a href="#projects" className="hover:text-accent transition">Projects</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>☰</button>
        </div>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white flex flex-col items-center md:hidden py-4">
          <a href="#home" className="py-2" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" className="py-2" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" className="py-2" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" className="py-2" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
