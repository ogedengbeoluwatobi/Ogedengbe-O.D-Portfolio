import Icon from "./Icon";
import SectionTitle from "./SectionTitle";
import { EMAIL, RESUME } from "../data/site";

const STATS = [
  ["10+", "Projects Completed"],
  ["2+", "Years Experience"],
  ["100%", "Client Satisfaction"],
];

const INFO = [
  ["Name:", "Ogedengbe Oluwatobi Daniel"],
  ["Based in:", "Lagos, Nigeria"],
  ["Role:", "Full-Stack Developer"],
  ["Status:", "Available for work ✓", true],
  ["Email:", EMAIL],
  ["Freelance:", "Open ✓", true],
];

export default function About({ onContact }) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="01" title="About Me" className="about-title" />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          <div className="relative flex-shrink-0 about-image">
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-green-400/30 rounded-xl z-0" />
            <div
              className="relative z-10 w-64 h-80 lg:w-72 lg:h-96 rounded-xl overflow-hidden"
              style={{
                boxShadow:
                  "0 0 0 2px #4ade80, 0 0 30px rgba(74, 222, 128, 0.15)",
              }}
            >
              <img
                src="/assets/about-pic.png"
                alt="Ogedengbe Oluwatobi Daniel"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 z-20 shadow-xl">
              <p className="text-green-400 font-mono text-xs mb-1">
                Experience
              </p>
              <p className="text-white font-bold text-2xl">
                2+{" "}
                <span className="text-gray-400 text-sm font-normal">Years</span>
              </p>
            </div>
          </div>

          <div className="flex-1 about-text">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              A passionate developer based in{" "}
              <span className="text-green-400">Lagos, Nigeria 🇳🇬</span>
            </h3>
            <div className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed mb-10">
              <p>
                I'm{" "}
                <span className="text-white font-medium">
                  Ogedengbe Oluwatobi Daniel
                </span>
                , a Full-Stack Developer and aspiring Software Engineer
                passionate about building modern, scalable, and user-centered
                digital experiences. As a recent graduate, I am driven by
                curiosity, continuous learning, and the desire to create
                technology that solves real-world problems.
              </p>
              <p>
                My expertise spans both front-end and back-end development, with
                experience using technologies such as JavaScript, TypeScript,
                React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, and
                SQL. I enjoy transforming ideas into functional applications
                while writing clean, maintainable, and efficient code.
              </p>
              <p>
                I am currently seeking full-time, internship, and freelance
                opportunities where I can contribute to impactful projects,
                collaborate with innovative teams, and further develop my skills
                as a software engineer. I bring a growth mindset, strong
                problem-solving abilities, attention to detail, and a genuine
                passion for technology.
              </p>
              <p>
                Whether it's developing responsive web applications, optimizing
                user experiences, or learning emerging technologies, I am
                committed to delivering solutions that create value and make a
                difference. My goal is to grow into a world-class software
                engineer while helping businesses and individuals bring their
                ideas to life through technology.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              {STATS.map(([value, label]) => (
                <div
                  key={label}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-green-400/40 transition-all duration-300"
                >
                  <p className="text-green-400 font-bold text-3xl font-mono">
                    {value}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 font-mono text-sm">
              {INFO.map(([label, value, highlight]) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-green-400">▹</span>
                  <span className="text-gray-500">{label}</span>
                  <span
                    className={highlight ? "text-green-400" : "text-gray-300"}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={RESUME}
                download
                className="bg-green-400 text-gray-950 font-bold px-8 py-3 rounded-full hover:bg-green-300 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <Icon name="download" />
                Download Resume
              </a>
              <button
                onClick={onContact}
                className="border border-gray-700 text-gray-300 font-medium px-8 py-3 rounded-full hover:border-green-400 hover:text-green-400 transition-all duration-300 text-center"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
