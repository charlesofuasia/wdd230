const modeBtn = document.querySelector("#mode");
const main = document.querySelector("main");

modeBtn.addEventListener("click", () =>{
    if (modeBtn.textContent.includes("🌙")){
        main.style.backgroundColor = "#000"
        main.style.color = "#fff"
        modeBtn.textContent = "🔆"
    }
    else{
        modeBtn.textContent = "🌙";
        main.style.backgroundColor = "#c2ffc2"
        main.style.color = "#000"
    }
})