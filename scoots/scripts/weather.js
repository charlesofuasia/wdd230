const url = "http://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&units=imperial&appid=6884df5e492c8ff4980c6b3a650eb8a0";
const info = document.querySelector('#weather');

async function fetchData(){
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        displayInfo(data);
    }
}

function displayInfo(data){
    const weatherInfo = document.createElement('section');
    const today = document.createElement('div');
    const tomorrow = document.createElement('div');
    const weatherHeader = document.createElement('h2');
    const todayHeader = document.createElement('h3');
    const nextHeader = document.createElement('h3');
    const icon = document.createElement('img');
    const icon2 = document.createElement('img');
    const currentTemp = document.createElement('span');
    const temp2 = document.createElement('span')
    const desc = document.createElement('span');
    const desc2 = document.createElement('span');
    const humidity = document.createElement('span');
    const humidity2 = document.createElement('span');
    const visibility = document.createElement('span');
    const visibility2 = document.createElement('span');

    weatherHeader.textContent = 'Weather Information';
    currentTemp.innerHTML = `${Math.round(data.list[0].main.temp)}&deg;F`;
    humidity.textContent = `Humidity: ${data.list[0].main.humidity}`;
    visibility.textContent = `Visibity: ${data.list[0].visibility}`;
    desc.textContent = `Weather Condition: ${data.list[0].weather[0].description}`;
    const iconurl = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`
    icon.setAttribute('src', `${iconurl}`);
    icon.setAttribute('alt', `Icon for ${data.list[0].weather[0].description}` );
    todayHeader.textContent = 'Current Weather Information:';
    nextHeader.textContent = 'Tomorrow\'s Weather Forecast:'

    temp2.innerHTML = `${Math.round(data.list[8].main.temp)}&deg;F`;
    humidity2.textContent = `Humidity: ${data.list[8].main.humidity}`;
    visibility2.textContent = `Visibility: ${data.list[8].visibility}`;
    const iconurl2 = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    icon2.setAttribute('src', `${iconurl2}`);
    icon2.setAttribute('alt', `Icon for ${data.list[8]}.weather[0].description`);
    desc2.textContent = `Tomorrow's Condition: ${data.list[8].weather[0].description}`;

    today.appendChild(todayHeader);
    today.appendChild(icon)
    today.appendChild(currentTemp);
    today.appendChild(humidity);
    today.appendChild(visibility);
    today.appendChild(desc);

    tomorrow.appendChild(nextHeader);
    tomorrow.appendChild(icon2);
    tomorrow.appendChild(temp2);
    tomorrow.appendChild(humidity2);
    tomorrow.appendChild(visibility2);
    tomorrow.appendChild(desc2);


    weatherInfo.appendChild(weatherHeader);
    weatherInfo.appendChild(today);
    weatherInfo.appendChild(tomorrow);
    info.append(weatherInfo);
}
fetchData();