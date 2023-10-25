const copyrightDate = document.querySelector("#copied");
const lastModified = document.querySelector("#modified");

const date = new Date();
const year = date.getFullYear();

copyrightDate.textContent = year;

const modified = new Date(document.lastModified);

lastModified.textContent = modified;