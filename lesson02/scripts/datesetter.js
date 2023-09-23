const date = new Date();
let currentYear = date.getFullYear();

document.querySelector("#copyright").textContent = ` ${currentYear} Charles Ofuasia`;

const modified = new Date(document.lastModified);
document.querySelector("#modified").textContent = `Last modified: ${modified}`;
e.shadowRoot.innerHTML= "";