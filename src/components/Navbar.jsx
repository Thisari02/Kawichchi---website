import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="font-heading text-2xl text-primary">
          Kawichchi
        </h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-10 text-sm text-primary">
          {["Home", "About", "Projects", "Contact"].map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative hover:text-accent transition after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary hover:text-accent transition"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-black/10">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {["Home", "About", "Projects", "Contact"].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-primary hover:text-accent transition py-2"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
