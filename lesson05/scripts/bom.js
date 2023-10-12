const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", ()=> {

     if (input.value !=="" && input.value !== input.placeholder){

        const favchapter = input.value;
        input.value = "";
        const scripture = document.createElement("li");
        const text = document.createElement("span");
        const newBtn = document.createElement("button");
        text.textContent = favchapter;
        newBtn.textContent = "⨉"

        scripture.append(text);

        scripture.append(newBtn);

        list.appendChild(scripture);

        newBtn.addEventListener("click", ()=> {
            list.removeChild(scripture)
        })
        
        

    }
    else{ 
        alert("Error: Choose a favorite Book of Mormon chapter");    
    }
    input.focus();

});