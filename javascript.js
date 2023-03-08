gsap.from(".navbar", { duration: 1, y: "-100%", ease: 'bounce'});

const menuOpen = document.getElementById("menuOpen");
const dropDown = document.getElementById("dropDown");

menuOpen.addEventListener("click", () => {
  console.log("hhh");
  menuOpen.classList.add("active");
  dropDown.classList.add("active");
});

console.log(menuOpen);
