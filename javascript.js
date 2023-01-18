const dropdown = document.querySelector(".dropdown");
const menuOpen = document.querySelector(".dropdownActive");
const menuClose = document.querySelector(".dropdownClose");


menuOpen.addEventListener("click", ()=>{
    dropdown.classList.add("active");
    dropdownActive.classList.add("active");
    dropdownClose.classList.add("active");

});
menuOpen.addEventListener("click", ()=>{
    dropdown.classList.remove("active");
    dropdownActive.classList.remove("active");
    dropdownClose.classList.remove("active");

});


