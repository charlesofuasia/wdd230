const menu = document.querySelector("#hamburger-menu");
const menuList = document.querySelector(".menu-list");

menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuList.classList.toggle("show");
});