 const typed = new Typed(".text-typing", {
  strings: ["Front-end Developer", "UI/UX Designer"],
  typeSpeed: 99,
  backSpeed: 50,
  backDelay: 999,
  loop: true,
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 100,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(  ".home-img",  { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
ScrollReveal().reveal(".about-img img", { delay: 200, origin: "left" });
ScrollReveal().reveal(".about-content h2", { delay: 300, origin: "top" });
ScrollReveal().reveal(".about-content h3", { delay: 400, origin: "bottom" });
ScrollReveal().reveal(".about-content p", { delay: 500, origin: "right" });
ScrollReveal().reveal(".social-media", { delay: 600, origin: "bottom" }); 
ScrollReveal().reveal(".timeline-item", { delay: 200, origin: "bottom", interval: 200 });
ScrollReveal().reveal(".container1", { delay: 200, origin: "left" });
ScrollReveal().reveal(".technical-bars .bar", { delay: 300, origin: "bottom", interval: 100 });
ScrollReveal().reveal(".sub-title", { delay: 300, origin: "left", interval: 100 });
ScrollReveal().reveal(".portfolio-box", { delay: 300, origin: "bottom", interval: 200 });
ScrollReveal().reveal(".txt", { delay: 300, origin: "right", interval: 100 });
ScrollReveal().reveal(".grid", { delay: 300, origin: "top", interval: 100 });
ScrollReveal().reveal(".contact-container .form-container input", { delay: 300, origin: "top", interval: 200 });
ScrollReveal().reveal(".contact-container .form-container textarea", { delay: 400, origin: "right" });
ScrollReveal().reveal(".contact-container .form-container button", { delay: 500, origin: "bottom" })
ScrollReveal().reveal(".text", { delay: 300, origin: "right", interval: 100 });
ScrollReveal().reveal(".contact-container", { delay: 200, origin: "bottom", interval: 200 });
ScrollReveal().reveal(".maps-image", { delay: 200, origin: "bottom", interval: 200 });