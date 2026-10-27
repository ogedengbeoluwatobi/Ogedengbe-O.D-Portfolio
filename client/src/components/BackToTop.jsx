import Icon from "./Icon";
import useScrollY from "../hooks/useScrollY";

export default function BackToTop() {
  const visible = useScrollY() > 500;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-green-400 text-gray-950 rounded-full flex items-center justify-center shadow-lg shadow-green-400/20 transition-all duration-300 hover:bg-green-300 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <Icon name="up" className="w-5 h-5" strokeWidth={2.5} />
    </button>
  );
}
