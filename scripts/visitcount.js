const visitCounter = document.querySelector("#visit-counter");

let visitCount = parseInt(window.localStorage.getItem("visitcount-ls")) || 0;

if (visitCount != 0){
    visitCounter.textContent = `Number of visits: ${visitCount}`;
}else{
    visitCounter.textContent = "Welcome to my page! your fist visit";
}

visitCount++

localStorage.setItem("visitcount-ls", visitCount);