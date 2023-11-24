const modeBtn = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header")

modeBtn.addEventListener("click", () =>{
    if (modeBtn.textContent.includes("🕶️")){
        main.style.backgroundColor = "#000";
        main.style.color = "#fff";
        header.style.backgroundColor = "#000";
        header.style.color = "#fff";
        modeBtn.textContent = "🔆";
    }
    else{
        modeBtn.textContent = "🕶️";
        main.style.backgroundColor = "#c2ffc2";
        main.style.color = "#000";
        header.style.backgroundColor = "#c2ffc2";
        header.style.color = "#140014"
    }
})