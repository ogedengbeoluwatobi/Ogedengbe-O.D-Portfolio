import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import SectionTitle from "./SectionTitle";
import { sendContactMessage } from "../lib/api";
import {
  EMAIL, GITHUB, LINKEDIN, PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_DISPLAY, WHATSAPP_NUMBER,
} from "../data/site";

const INFO = [
  { icon: "mail", label: "Email", text: EMAIL, href: `mailto:${EMAIL}` },
  { icon: "whatsapp", label: "WhatsApp", text: WHATSAPP_DISPLAY, href: `https://wa.me/${WHATSAPP_NUMBER}`, external: true },
  { icon: "phone", label: "Phone", text: PHONE_DISPLAY, href: `tel:${PHONE_NUMBER}` },
  { icon: "pin", label: "Location", text: "Lagos, Nigeria 🇳🇬" },
];

const FIELD =
  "bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm font-mono placeholder-gray-600 focus:outline-none focus:border-green-400 transition-colors duration-300";
const LABEL = "text-gray-500 text-xs font-mono uppercase tracking-widest";

const STATUS_STYLES = {
  success: "bg-green-900/30 text-green-400 border border-green-800",
  error: "bg-red-900/30 text-red-400 border border-red-800",
};
const STATUS_TEXT = {
  success: "✅ Message sent! I will get back to you as soon as possible.",
  error: "❌ Oops! Something went wrong. Please try again.",
};

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const sending = status === "sending";

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const t = setTimeout(() => setStatus("idle"), status === "success" ? 5000 : 6000);
    return () => clearTimeout(t);
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendContactMessage(Object.fromEntries(new FormData(formRef.current)));
      formRef.current.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="04" title="Get In Touch" className="contact-title" />

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 contact-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Let's work <span className="text-green-400">together.</span>
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              I'm currently open to new opportunities — freelance projects, full-time roles, or just a
              good conversation about tech. My inbox is always open. I'll get back to you as soon as
              possible!
            </p>

            <div className="flex flex-col gap-5 mb-10">
              {INFO.map(({ icon, label, text, href, external }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-green-400 group-hover:border-green-400/50 transition-all duration-300">
                    <Icon name={icon} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm font-mono"
                      >
                        {text}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm font-mono">{text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {[["github", GITHUB, "GitHub"], ["linkedin", LINKEDIN, "LinkedIn"]].map(([icon, href, label]) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-300"
                >
                  <Icon name={icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full contact-right">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h4 className="text-white font-bold text-lg mb-6 font-mono">&lt; Send a Message /&gt;</h4>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className={LABEL}>Name</label>
                    <input id="name" name="name" type="text" placeholder="John Doe" required className={FIELD} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={LABEL}>Email</label>
                    <input id="email" name="email" type="email" placeholder="john@example.com" required className={FIELD} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className={LABEL}>Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project inquiry / Collaboration / Just saying hi"
                    required
                    className={FIELD}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className={LABEL}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project or just say hello..."
                    required
                    className={`${FIELD} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className={`bg-green-400 text-gray-950 font-bold py-4 rounded-xl hover:bg-green-300 transition-all duration-300 font-mono flex items-center justify-center gap-2 ${
                    sending ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <span>{sending ? "Sending..." : "Send Message"}</span>
                  <Icon name={sending ? "loading" : "send"} />
                </button>

                {STATUS_TEXT[status] && (
                  <div
                    role="status"
                    className={`text-center text-sm font-mono py-3 rounded-xl ${STATUS_STYLES[status]}`}
                  >
                    {STATUS_TEXT[status]}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
