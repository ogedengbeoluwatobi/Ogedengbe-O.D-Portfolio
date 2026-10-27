import { useEffect, useState } from "react";

export default function useActiveSection(ids, offset = 100) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        return el && y >= el.offsetTop - offset && y < el.offsetTop - offset + el.offsetHeight;
      });
      setActive(current || "");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);
  return active;
}
