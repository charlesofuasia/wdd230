const numVisit = document.querySelector("#visits");

let visitCount = parseInt(window.localStorage.getItem("pagevisit-ls")) || 0;

if (visitCount != 0){
    numVisit.textContent = `Your number of visits here is: ${visitCount}`;
}else{
    numVisit.textContent = "Welcome to my page! your fist visit";
}

visitCount++

localStorage.setItem("pagevisit-ls", visitCount);