import Icon from "./Icon";
import { GITHUB, LINKEDIN, NAV_LINKS, PHONE_NUMBER, WHATSAPP_NUMBER } from "../data/site";

const SOCIALS = [
  { icon: "github", href: GITHUB, label: "GitHub", external: true },
  { icon: "linkedin", href: LINKEDIN, label: "LinkedIn", external: true },
  { icon: "whatsapp", href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "WhatsApp", external: true },
  { icon: "phone", href: `tel:${PHONE_NUMBER}`, label: "Call" },
  { icon: "mail", href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-16 px-6 pb-24 md:pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-green-400 font-black text-3xl tracking-tight">
              TOD<span className="text-white">.</span>
            </a>
            <p className="text-gray-500 text-sm font-mono mt-2 max-w-xs">
              Building clean, fast and scalable web experiences — one line at a time.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-gray-400">
              {[{ id: "home", label: "Home" }, ...NAV_LINKS].map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className="hover:text-green-400 transition-colors duration-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon, href, label, external }) => (
              <a
                key={icon}
                href={href}
                aria-label={label}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-300"
              >
                <Icon name={icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm font-mono text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-green-400">Ogedengbe Oluwatobi Daniel</span>. All
            rights reserved.
          </p>
          <p className="text-gray-600 text-sm font-mono text-center md:text-right">
            Designed & Built by <span className="text-green-400">TOD</span> with 💚
          </p>
        </div>
      </div>
    </footer>
  );
}
