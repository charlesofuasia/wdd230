const numVisit = document.querySelector("#visits");

let visitCount = parseInt(window.localStorage.getItem("visitcount-ls")) || 0;

if (visitCount != 0){
    numVisit.textContent = visitCount;
}else{
    numVisit.textContent = "Welcome to my page! your fist visit";
}

visitCount++

localStorage.setItem("visitcount-ls", visitCount);