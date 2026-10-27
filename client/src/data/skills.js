const icon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

export const SKILLS = [
  {
    title: "Frontend",
    className: "skills-frontend",
    items: [
      { label: "HTML5", icon: icon("html5") },
      { label: "CSS3", icon: icon("css3") },
      { label: "JavaScript", icon: icon("javascript") },
      { label: "React.js", icon: icon("react") },
      { label: "Tailwind", icon: icon("tailwindcss") },
    ],
  },
  {
    title: "Backend",
    className: "skills-backend",
    items: [
      { label: "Node.js", icon: icon("nodejs") },
      { label: "Express.js", icon: icon("express") },
      { label: "MongoDB", icon: icon("mongodb") },
      { label: "PostgreSQL", icon: icon("postgresql") },
      { label: "MySQL", icon: icon("mysql") },
    ],
  },
  {
    title: "Tools",
    className: "skills-tools",
    items: [
      { label: "Git", icon: icon("git") },
      { label: "GitHub", icon: icon("github") },
      { label: "VS Code", icon: icon("vscode") },
      { label: "Figma", icon: icon("figma") },
      { label: "Postman", icon: icon("postman") },
    ],
  },
];
