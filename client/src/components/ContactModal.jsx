import { useEffect } from "react";
import Icon from "./Icon";
import {
  EMAIL, GITHUB, LINKEDIN, PHONE_DISPLAY, PHONE_NUMBER, RESUME, WHATSAPP_DISPLAY, WHATSAPP_NUMBER,
} from "../data/site";

const LINKS = [
  { icon: "whatsapp", text: WHATSAPP_DISPLAY, href: `https://wa.me/${WHATSAPP_NUMBER}`, external: true, badge: "bg-green-500", hover: "hover:border-green-400/50" },
  { icon: "phone", text: PHONE_DISPLAY, href: `tel:${PHONE_NUMBER}`, badge: "bg-green-700", hover: "hover:border-green-400/50" },
  { icon: "mail", text: EMAIL, href: `mailto:${EMAIL}`, external: true, badge: "bg-indigo-500", hover: "hover:border-indigo-400/50" },
  { icon: "linkedin", text: "linkedin.com/in/oluwatobiogedengbeD", href: LINKEDIN, external: true, badge: "bg-blue-600", hover: "hover:border-blue-400/50" },
  { icon: "github", text: "github.com/ogedengbeoluwatobi", href: GITHUB, external: true, badge: "bg-gray-700", hover: "hover:border-purple-400/50" },
];

export default function ContactModal({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-all duration-500 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className={`relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden transition-all duration-500 isolate ${
          open ? "scale-100" : "scale-90"
        }`}
        style={{ background: "linear-gradient(135deg, #0f0c29, #1a1a4e, #24243e)" }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white text-sm z-20"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row items-stretch min-h-[420px]">
          <div className="hidden md:flex w-56 flex-shrink-0 items-center justify-center py-8 pl-8 pr-2">
            <img
              src="/assets/mobile-contact.png"
              alt="Phone mockup showing contact number"
              className="w-full h-auto object-contain"
              style={{
                mixBlendMode: "screen",
                filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.4)) brightness(1.05)",
                maxHeight: 360,
              }}
            />
          </div>

          <div className="flex-1 flex flex-col justify-center px-8 py-10">
            <p className="text-indigo-400 font-mono text-xs tracking-[0.3em] uppercase mb-2">Reach Out</p>
            <h2 className="text-white text-3xl font-bold mb-7">Let's Connect</h2>

            <div className="flex flex-col gap-3">
              {LINKS.map(({ icon, text, href, external, badge, hover }) => (
                <a
                  key={text}
                  href={href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl border border-white/10 ${hover} hover:bg-white/5 transition-all duration-300 group`}
                >
                  <div className={`w-9 h-9 rounded-lg ${badge} flex items-center justify-center flex-shrink-0 text-white`}>
                    <Icon name={icon} className="w-5 h-5" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors font-mono text-sm tracking-wide">
                    {text}
                  </span>
                </a>
              ))}

              <a
                href={RESUME}
                download
                className="flex items-center justify-center gap-3 px-4 py-3 mt-1 rounded-xl border border-indigo-500/40 hover:border-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 group text-indigo-400 group-hover:text-indigo-300"
              >
                <Icon name="download" />
                <span className="font-bold font-mono text-sm tracking-widest">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
