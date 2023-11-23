const spotlight1 = document.querySelector('#spotlight1');
const spotlight2 = document.querySelector('#spotlight2');
const urlSource = "data/members.json";

async function fetchData(){
    const response = await fetch(urlSource);
    const data = await response.json();

    console.log(data);

    displaySpolight(data);
}



fetchData();