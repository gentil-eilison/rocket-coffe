const burgerClicker = document.getElementById("burger-clicker")
const navbar = document.getElementById("mobile-navbar")
const mobileMainHeader = document.getElementById("mobile-main-header")
const coffeeMugs = document.getElementById("coffee-mugs")
const mobileBlur = document.getElementById("mobile-blur")

burgerClicker.addEventListener("click", function() {
    if (navbar.classList.contains("invisible")) {
        navbar.classList.remove("invisible")
        coffeeMugs.classList.add("invisible")
        mobileBlur.classList.add("invisible")
        mobileMainHeader.classList.add("invisible")
    } else {
        navbar.classList.add("invisible")
        coffeeMugs.classList.remove("invisible")
        mobileBlur.classList.remove("invisible")
        mobileMainHeader.classList.remove("invisible")
        navbar.classList.add("invisible")
    }
})

window.onhashchange = function() {
    const listItems = document.querySelectorAll("#mobile-navbar ul li a")
    const desktopListItems = document.querySelectorAll("#desktop-header nav ul li a")

    desktopListItems.forEach(item => {
        if (item.getAttribute("href") === window.location.hash) {
            item.classList.add("desktop-active")
        } else {
            item.classList.remove("desktop-active")
        }
    })
    
    listItems.forEach(item => {
        if (item.getAttribute("href") === window.location.hash) {
            item.classList.add("mobile-active")
        } else {
            item.classList.remove("mobile-active")
        }
    })
}