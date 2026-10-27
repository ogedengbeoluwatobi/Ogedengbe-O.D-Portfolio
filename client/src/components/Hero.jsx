import Icon from "./Icon";
import useTypewriter from "../hooks/useTypewriter";
import { RESUME, ROLES } from "../data/site";

const RINGS = [
  { cls: "spiral-ring", size: 320 },
  { cls: "spiral-ring-2", size: 380 },
  { cls: "spiral-ring", size: 440, duration: "35s" },
];

export default function Hero({ onContact }) {
  const role = useTypewriter(ROLES);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left max-w-2xl text-transform">
          <p className="text-green-400 font-mono text-sm tracking-widest uppercase mb-6 animate-fade-in">
            &lt; Hello, World /&gt; 👋
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            I'm <br />
            <span className="text-green-400">OGEDENGBE</span>
            <br />
            Oluwatobi Daniel
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-4 font-mono">
            <span className="text-green-400">{role}</span>
            <span className="animate-blink text-green-400">|</span>
          </p>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            I design and build fast, clean, and scalable web applications — from pixel-perfect
            frontends to robust backends.
          </p>
          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mt-10">
            <button
              onClick={onContact}
              className="bg-green-400 text-gray-950 font-bold px-8 py-3 rounded-full hover:bg-green-300 transition-all duration-300 w-full sm:w-auto text-center font-mono"
            >
              &lt; Get In Touch /&gt;
            </button>
            <a
              href={RESUME}
              download
              className="border border-gray-700 text-gray-300 font-medium px-8 py-3 rounded-full hover:border-green-400 hover:text-green-400 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              <Icon name="download" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center flex-shrink-0 image-transform">
          {RINGS.map(({ cls, size, duration }) => (
            <div
              key={size}
              className={cls}
              style={{
                width: size,
                height: size,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                ...(duration && { animationDuration: duration }),
              }}
            />
          ))}
          <div className="absolute w-64 h-64 md:w-72 md:h-72 rounded-full bg-green-400 opacity-5 animate-pulse-ring" />
          <div className="relative md:animate-bounce-slow">
            <div className="image-outline w-56 h-72 md:w-64 md:h-64 rounded-xl md:rounded-full overflow-hidden relative z-10">
              <img
                src="/assets/profile-pic.jpg"
                alt="Oluwatobi Daniel — Full-Stack Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-0 bg-gray-900 border border-gray-700 rounded-full px-3 py-1 flex items-center gap-2 text-xs font-mono z-20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400">Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
