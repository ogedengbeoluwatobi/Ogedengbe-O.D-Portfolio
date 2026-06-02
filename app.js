// =====================
// NAVBAR — scroll effect
// =====================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-gray-950", "shadow-lg", "shadow-black/50", "py-4");
    navbar.classList.remove("py-6");
  } else {
    navbar.classList.remove(
      "bg-gray-950",
      "shadow-lg",
      "shadow-black/50",
      "py-4",
    );
    navbar.classList.add("py-6");
  }
});
// =====================
// ACTIVE NAV LINK ON SCROLL
// =====================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("text-green-400");
        link.classList.add("text-gray-400");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.remove("text-gray-400");
          link.classList.add("text-green-400");
        }
      });
    }
  });
});

// =====================
// MOBILE MENU TOGGLE
// =====================
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("translate-x-full");
  mobileMenu.classList.toggle("translate-x-0");
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
  });
});

// =====================
// TYPEWRITER EFFECT
// =====================
const roles = [
  "Full-Stack Developer.",
  "Software Engineer.",
  "Frontend Specialist.",
  "Backend Builder.",
  "Problem Solver.",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById("typewriter");

function type() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  // Finished typing
  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1500);
  }

  // Finished deleting
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const speed = isDeleting ? 60 : 100;
  setTimeout(type, speed);
}

// Start typewriter
type();
// =====================
// CONTACT MODAL
// =====================
const openModalBtn = document.getElementById("open-contact-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalBackdrop = document.getElementById("modal-backdrop");
const contactModal = document.getElementById("contact-modal");
const modalBox = document.getElementById("modal-box");

function openModal() {
  contactModal.classList.remove("opacity-0", "pointer-events-none");
  contactModal.classList.add("opacity-100");
  modalBox.classList.remove("scale-90");
  modalBox.classList.add("scale-100");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  contactModal.classList.add("opacity-0", "pointer-events-none");
  contactModal.classList.remove("opacity-100");
  modalBox.classList.add("scale-90");
  modalBox.classList.remove("scale-100");
  document.body.style.overflow = "";
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
// =====================
// SCROLL REVEAL
// =====================
const sr = ScrollReveal({
  distance: "60px",
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  reset: false,
  mobile: true,
  useDelay: "always",
});

sr.reveal(".text-transform", {
  delay: 300,
  origin: "left",
});

sr.reveal(".image-transform", {
  delay: 400,
  origin: "top",
});

// About section
sr.reveal(".about-title", {
  delay: 200,
  origin: "top",
});

sr.reveal(".about-image", {
  delay: 300,
  origin: "left",
});

sr.reveal(".about-text", {
  delay: 400,
  origin: "right",
});
// About section modal trigger
const openModalBtn2 = document.getElementById("open-contact-modal-2");
openModalBtn2.addEventListener("click", openModal);

// Skills section
sr.reveal(".skills-title", {
  delay: 200,
  origin: "top",
});

sr.reveal(".skills-frontend", {
  delay: 300,
  origin: "bottom",
});

sr.reveal(".skills-backend", {
  delay: 400,
  origin: "bottom",
});

sr.reveal(".skills-tools", {
  delay: 500,
  origin: "bottom",
});
// Projects section
sr.reveal(".projects-title", {
  delay: 200,
  origin: "top",
});

sr.reveal(".project-card", {
  delay: 300,
  origin: "bottom",
  interval: 150,
});

sr.reveal(".projects-more", {
  delay: 200,
  origin: "bottom",
});
// =====================
// CONTACT FORM — EmailJS
// =====================
const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const btnText = document.getElementById("btn-text");
const btnIcon = document.getElementById("btn-icon");
const formMessage = document.getElementById("form-message");

const loadingIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>`;
const sendIcon = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>`;

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  btnText.textContent = "Sending...";
  btnIcon.innerHTML = loadingIcon;
  submitBtn.disabled = true;
  submitBtn.classList.add("opacity-70", "cursor-not-allowed");
  formMessage.classList.add("hidden");

  emailjs.sendForm("service_kbmss96", "template_18gzwja", contactForm).then(
    function () {
      btnText.textContent = "Send Message";
      btnIcon.innerHTML = sendIcon;
      submitBtn.disabled = false;
      submitBtn.classList.remove("opacity-70", "cursor-not-allowed");

      formMessage.textContent =
        "✅ Message sent! I will get back to you as soon as possible.";
      formMessage.classList.remove(
        "hidden",
        "bg-red-900/30",
        "text-red-400",
        "border-red-800",
      );
      formMessage.classList.add(
        "bg-green-900/30",
        "text-green-400",
        "border",
        "border-green-800",
      );

      contactForm.reset();

      setTimeout(function () {
        formMessage.classList.add("hidden");
      }, 5000);
    },
    function (error) {
      console.error("EmailJS error:", error);

      btnText.textContent = "Send Message";
      btnIcon.innerHTML = sendIcon;
      submitBtn.disabled = false;
      submitBtn.classList.remove("opacity-70", "cursor-not-allowed");

      formMessage.textContent =
        "❌ Oops! Something went wrong. Please try again.";
      formMessage.classList.remove(
        "hidden",
        "bg-green-900/30",
        "text-green-400",
        "border-green-800",
      );
      formMessage.classList.add(
        "bg-red-900/30",
        "text-red-400",
        "border",
        "border-red-800",
      );

      setTimeout(function () {
        formMessage.classList.add("hidden");
      }, 6000);
    },
  );
});
// Contact section
sr.reveal(".contact-title", {
  delay: 200,
  origin: "top",
});

sr.reveal(".contact-left", {
  delay: 300,
  origin: "left",
});

sr.reveal(".contact-right", {
  delay: 400,
  origin: "right",
});

// // Footer
// sr.reveal(".footer-logo", {
//   delay: 100,
//   origin: "bottom",
//   distance: "30px",
// });

// sr.reveal(".footer-links", {
//   delay: 150,
//   origin: "bottom",
//   distance: "30px",
// });

// sr.reveal(".footer-social", {
//   delay: 200,
//   origin: "bottom",
//   distance: "30px",
// });

// sr.reveal(".footer-bottom", {
//   delay: 250,
//   origin: "bottom",
//   distance: "30px",
// });
// =====================
// BACK TO TOP BUTTON
// =====================
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.remove("opacity-0", "pointer-events-none");
    backToTop.classList.add("opacity-100", "pointer-events-auto");
  } else {
    backToTop.classList.add("opacity-0", "pointer-events-none");
    backToTop.classList.remove("opacity-100", "pointer-events-auto");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
