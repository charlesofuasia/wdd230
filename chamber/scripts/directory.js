const directory = document.querySelector('#directory');
const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');
const url = "data/members.json";


gridBtn.addEventListener('click', () => {
    directory.classList.add('dir-grid');
    directory.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    directory.classList.add('dir-list');
    directory.classList.remove('dir-grid');
})

async function getCards(){
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

function displayMembers(arr){
    arr.forEach((member) =>{
        let card = document.createElement('section');
        let header = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let link = document.createElement('a');
        let description = document.createElement('p');
        let grade = document.createElement('p');
        card.classList.add("card");

        header.innerHTML = member.name;
        logo.src = member.imageurl;
        logo.alt = `image of ${member.name} logo`;
        logo.loading = "lazy";
        logo.width = "375";
        logo.height = "375";
        link.textContent = member.website;
        address.textContent = member.address;
        phone.textContent = member.phone;
        description.textContent = member.description;
        grade.innerHTML = `Membership Level: ${member.membership}`;

        card.appendChild(header);
        card.appendChild(logo);
        card.appendChild(link);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(description);
        card.appendChild(grade);

        directory.append(card);





    })
}


getCards();