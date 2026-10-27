import { useEffect, useState } from "react";

export default function useTypewriter(
  roles,
  { typeSpeed = 100, deleteSpeed = 60, pause = 1500 } = {},
) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roles[index];
    let timer;

    if (!deleting && text === role) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    } else {
      timer = setTimeout(
        () => setText(role.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, roles, typeSpeed, deleteSpeed, pause]);

  return text;
}
