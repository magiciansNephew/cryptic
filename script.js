/**
 * Nav functionality
 */

let menuIc = document.querySelector(".menu-ic")
let closeIc = document.querySelector(".close-ic")
let menuWrap = document.querySelector(".menu-wrap")

if(screen.width < 768){
    menuWrap.classList.add("no-height")
}

console.log(menuWrap)

menuIc.addEventListener("click", toggleMenu)
closeIc.addEventListener("click", toggleMenu)

function toggleMenu() {
    menuIc.classList.toggle("hide")
    closeIc.classList.toggle("hide")
    menuWrap.classList.toggle("no-height")
}
