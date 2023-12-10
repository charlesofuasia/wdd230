const url = "data/rentals.json"
const cards = document.querySelector('#rentals');

async function fetchRentals(){
    const response = await fetch(url)
    if (response.ok){
        const data = await response.json();
        loadRentals(data.rentals)
    }
}

function loadRentals(data){
    data.forEach((rental) => {
        let card = document.createElement('div');
        let title = document.createElement('h3');
        let photo = document.createElement('img');
        let table = document.createElement('table');
        let details = document.createElement('p');

        title.textContent = rental.name;
        photo.src = rental.imageurl;
        photo.alt = `Photo of ${rental.name}`;
        photo.width = "500";
        photo.height = "400";
        photo.loading = "lazy";
        table.innerHTML = `  <thead>
        <tr>
          <th colspan="3" scope="colgroup">Rental Pricing</th>
        </tr>
        <tr>
          <th scope="col">Customer Type</th>
          <th scope="col">Half Day</th>
          <th scope="col">Full Day</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Reservation</th>
          <td>${rental.rehalf}</td>
          <td>${rental.refull}</td>
        </tr>
        <tr>
          <th scope="row">Walk-In</th>
          <td>${rental.inhalf}</td>
          <td>${rental.infull}</td>
        </tr>
      </tbody>`;
      details.innerHTML = `${rental.description} Max-Capacity: ${rental.capacity}`;


      card.appendChild(title);
      card.appendChild(photo);
      card.appendChild(table);
      card.appendChild(details);

      cards.append(card);

        
        
    });
}

fetchRentals();