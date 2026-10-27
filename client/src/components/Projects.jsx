import Icon from "./Icon";
import SectionTitle from "./SectionTitle";
import { PROJECTS } from "../data/projects";
import { GITHUB } from "../data/site";

function ProjectCard({ project, index }) {
  const { title, image, live, code, description, tags } = project;
  return (
    <article className="project-card group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-green-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400/5">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gray-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            title="View Live"
            className="w-10 h-10 bg-green-400 text-gray-950 rounded-full flex items-center justify-center hover:bg-green-300 transition-colors"
          >
            <Icon name="external" />
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            title="View Code"
            className="w-10 h-10 bg-gray-800 text-white border border-gray-600 rounded-full flex items-center justify-center hover:border-green-400 transition-colors"
          >
            <Icon name="github" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-green-400 font-mono text-xs tracking-widest uppercase">Featured Project</span>
          <span className="text-gray-600 font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="text-white text-xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-gray-800 text-green-400 border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle number="03" title="Projects" className="projects-title" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="flex justify-center mt-14 projects-more">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-400/50 text-green-400 font-mono font-medium px-10 py-4 rounded-full hover:bg-green-400/10 transition-all duration-300 flex items-center gap-3"
          >
            <Icon name="github" className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
