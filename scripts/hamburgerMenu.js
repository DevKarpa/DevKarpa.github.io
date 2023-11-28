function showHamburger() {
    var nav = document.getElementById("mobileNav");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}