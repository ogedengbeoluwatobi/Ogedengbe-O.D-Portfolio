import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useScrollReveal() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 1000,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
      mobile: true,
      useDelay: "always",
    });

    const reveals = [
      [".text-transform", 300, "left"],
      [".image-transform", 400, "top"],
      [".about-title", 200, "top"],
      [".about-image", 300, "left"],
      [".about-text", 400, "right"],
      [".skills-title", 200, "top"],
      [".skills-frontend", 300, "bottom"],
      [".skills-backend", 400, "bottom"],
      [".skills-tools", 500, "bottom"],
      [".projects-title", 200, "top"],
      [".projects-more", 200, "bottom"],
      [".contact-title", 200, "top"],
      [".contact-left", 300, "left"],
      [".contact-right", 400, "right"],
    ];
    reveals.forEach(([selector, delay, origin]) => sr.reveal(selector, { delay, origin }));
    sr.reveal(".project-card", { delay: 300, origin: "bottom", interval: 150 });

    return () => sr.destroy();
  }, []);
}
