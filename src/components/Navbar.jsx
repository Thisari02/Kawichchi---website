import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-heading font-semibold text-primary tracking-widest">KAWICHCHI</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-sm uppercase tracking-wide">
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} className="text-primary hover:text-accent transition">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <div className="w-6 h-0.5 bg-primary mb-1 transition-all"></div>
          <div className="w-6 h-0.5 bg-primary mb-1 transition-all"></div>
          <div className="w-6 h-0.5 bg-primary transition-all"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col items-center gap-6 py-6 bg-white md:hidden border-t border-gray-200">
          {navLinks.map(link => (
            <li key={link.label} className="text-lg">
              <a href={link.href} className="text-primary hover:text-accent transition" onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
