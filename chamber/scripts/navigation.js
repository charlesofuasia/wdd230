
const menu = document.querySelector("#menu");
const menuList = document.querySelector(".navlist");

menu.addEventListener("click", () => {
    menu.classList.toggle("show");
    menuList.classList.toggle("show");
});