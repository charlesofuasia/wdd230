const spotlight1 = document.querySelector('#spotlight1');
const spotlight2 = document.querySelector('#spotlight2');
const urlSource = "data/members.json";

async function fetchData(){
    const response = await fetch(urlSource);
    const data = await response.json();
    displaySpolight(data);
    
}

function displaySpolight(data){
    const card1 = document.createElement('div');
    const card2 = document.createElement('div');
    const header1 = document.createElement('h2');
    const image1 = document.createElement('img');
    const link1 = document.createElement('p');
    const add1 = document.createElement('p');
    const desc1 = document.createElement('p');
     const header2 = document.createElement('h2');
    const image2 = document.createElement('img');
    const link2 = document.createElement('p');
    const add2 = document.createElement('p');
    const desc2 = document.createElement('p');
    const phone1 = document.createElement('p');
    const phone2 = document.createElement('p');

   
    header1.textContent = data.members[4].name;
    image1.src = data.members[4].imageurl;
    image1.alt = `image of ${data.members[4].name} logo`;
    image1.setAttribute('width', '375');
    image1.setAttribute('width', '375');
    image1.setAttribute('loading', 'lazy');
    desc1.textContent = data.members[4].description;
    add1.textContent = data.members[4].address;
    phone1.textContent = data.members[4].phone;
    link1.textContent = data.members[4].website;
    card1.appendChild(header1);
    card1.appendChild(image1);
    card1.appendChild(desc1);
    card1.appendChild(add1);
    card1.appendChild(phone1);
    card1.appendChild(link1);
    spotlight1.append(card1);

    header2.textContent = data.members[5].name
    image2.src = data.members[5].imageurl;
    image2.alt = `image of ${data.members[5].name} logo`;
    image2.setAttribute('width', '375');
    image2.setAttribute('width', '375');
    image2.setAttribute('loading', 'lazy');
    desc2.textContent = data.members[5].description;
    add2.textContent = data.members[5].address;
    phone2.textContent = data.members[5].phone;
    link2.textContent = data.members[5].website;
    card2.appendChild(header2);
    card2.appendChild(image2);
    card2.appendChild(desc2);
    card2.appendChild(add2);
    card2.appendChild(phone2);
    card2.appendChild(link2);
    spotlight2.append(card2);

    
}
fetchData();