import { useState } from "react";
import { NAV_LINKS } from "../data/site";
import useScrollY from "../hooks/useScrollY";
import useActiveSection from "../hooks/useActiveSection";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollY() > 50;
  const active = useActiveSection(SECTION_IDS);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-16 flex items-center justify-between ${
          scrolled ? "bg-gray-950 shadow-lg shadow-black/50 py-4" : "py-6"
        }`}
      >
        <a href="#home" className="text-green-400 font-black text-2xl tracking-tight">
          TOD<span className="text-white">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`hover:text-green-400 transition-colors duration-300 ${
                  active === id ? "text-green-400" : "text-gray-400"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block border border-green-400 text-green-400 text-sm font-medium px-5 py-2 rounded-full hover:bg-green-400 hover:text-gray-950 transition-all duration-300"
        >
          Hire Me
        </a>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        >
          <span className="w-6 h-0.5 bg-white transition-all duration-300" />
          <span className="w-6 h-0.5 bg-white transition-all duration-300" />
          <span className="w-4 h-0.5 bg-white transition-all duration-300" />
        </button>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-950 z-40 flex flex-col items-center justify-center gap-10 text-2xl font-bold transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {NAV_LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-400 transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
