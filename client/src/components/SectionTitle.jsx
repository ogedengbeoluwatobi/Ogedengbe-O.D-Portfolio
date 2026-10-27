export default function SectionTitle({ number, title, className }) {
  return (
    <div className={`flex items-center gap-4 mb-16 ${className}`}>
      <span className="text-green-400 font-mono text-sm tracking-widest uppercase">{number}.</span>
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="flex-1 h-px bg-gray-800 ml-4" />
    </div>
  );
}
