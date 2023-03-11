gsap.from(".navbar", { duration: 2, y: "-100%", ease: "bounce" });
gsap.from(".left-links", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
gsap.from(".right-links", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
gsap.from(".left-hero-section", {
  duration: 2,
  x: "-100vw",
  delay: 1,
  ease: "power.in",
});
gsap.from(".image-hero-section", {
  duration: 3.5,
  opacity: -4,
  x: "100%",
  x: "-100vw",
  ease: "power.in",
});
gsap.to(".footer", { duration: 1, y: 0, ease: "eleastic", delay: 2.5 });

const menuOpen = document.getElementById("menuOpen");
const dropDown = document.getElementById("dropDown");

menuOpen.addEventListener("click", () => {
  console.log("hhh");
  menuOpen.classList.add("active");
  dropDown.classList.add("active");
});

console.log(menuOpen);
