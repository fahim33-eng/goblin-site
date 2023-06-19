let menu = document.querySelector("#menu-icon")
let navList = document.querySelector(".nav-items")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navList.classList.toggle("open")
}


const sr = ScrollReveal({
    distance: "100px",
    duration : 4000,
    delay : 0,
    reset : false,
})

sr.reveal(".hero-text", {delay : 100, origin: 'left'})
sr.reveal(".hero-img", {delay : 0, origin: 'top'})
