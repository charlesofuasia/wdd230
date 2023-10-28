const numVisit = document.querySelector("#visits");
//convert day into millisecond.
const dayInMsecs = 1000*60*60*24; 

let lastVisit = Number(window.localStorage.getItem("lastVisit"));//get lastVisit from local storage, change from string to number.
let presentTime = Date.now();//gives present time in milliseconds.
let timeDifference = (presentTime - lastVisit)/ dayInMsecs;



let visitCount = parseInt(window.localStorage.getItem("pagevisit-ls")) || 0;

if (visitCount == 0){
    numVisit.textContent = "Welcome! Let us know if you have any questions.";
}else if (timeDifference < 1) {
    numVisit.textContent = "Back so soon! Awesome."

}else{
    numVisit.textContent = `You last visited ${timeDifference} day${addS(timeDifference)} ago.`;
};

visitCount++

localStorage.setItem("lastVisit", presentTime);
localStorage.setItem("pagevisits-ls", visitCount);

//function to add letter "s" to days if days are greater than 1.
function addS(timeDifference){
    if (timeDifference > 1){
        return "s";
    }else{
        return "";
    }
}