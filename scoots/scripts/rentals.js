const url = "data/rentals.json"
const ren = document.querySelector('rentals');

async function fetchRentals(){
    const response = await fetch(url)
    if (response.ok){
        const data = await response.json();
        console.log(data.rentals)
    }
}

function loadRentals(rentals){
   const photo = document.createElement('h3');
   photo.textContent = rentals[0].name;
   ren.append(photo);
}

fetchRentals();