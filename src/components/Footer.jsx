import { Instagram, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-sm">
          © {new Date().getFullYear()} Kawichchi. All Rights Reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-accent transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-accent transition">
            <Linkedin size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
