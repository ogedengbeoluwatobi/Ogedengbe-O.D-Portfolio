import SectionTitle from "./SectionTitle";
import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="02" title="Skills & Stack" className="skills-title" />

        {SKILLS.map(({ title, className, items }) => (
          <div key={title} className={`mb-14 ${className}`}>
            <h3 className="text-green-400 font-mono text-sm tracking-widest uppercase mb-6">
              &lt; {title} /&gt;
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {items.map(({ label, icon }) => (
                <div
                  key={label}
                  className="group bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col items-center gap-3 hover:border-green-400/50 hover:bg-gray-800 transition-all duration-300 cursor-default"
                >
                  <img
                    src={icon}
                    alt={label}
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-gray-300 text-sm font-mono group-hover:text-green-400 transition-colors">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
