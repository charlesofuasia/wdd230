const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


let chaptersArray = getChapterList() || [];

button.addEventListener("click", ()=> {

     if (input.value !=="" && input.value !== input.placeholder){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value  = "";
        input.focus();

        newBtn.addEventListener("click", ()=> {
            list.removeChild(scripture)
        })
           

    }
    else{ 
        alert("Error: Choose a favorite Book of Mormon chapter");    
    }
    input.focus();

});

chaptersArray.array.forEach(chapter => {
    displayList(chapter);
});
function displayList(item){
    let li = document.createElement("li");
    let deleteBtn = document.createElement("button");
    li.textContent = item;
    deleteBtn.textContent = "⨉";

    deleteBtn.classList.add("delete");
    li.append(deleteBtn);
    list.append(li);

    deleteBtn.addEventListener("click", function(){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })

}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}
chapter = chapter.slice(0, chapter.length - 1);
chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}