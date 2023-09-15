// Get the current year and append it to the <span> HTML element 
// with the id #copyDate
const date = new Date();
let year = date.getFullYear()
document.querySelector("#copyDate").textContent = year;

//codes to get the time and date a file or document was last updated.
const mDate = new Date(document.lastModified);
document.querySelector("#lastModified").innerHTML = mDate;