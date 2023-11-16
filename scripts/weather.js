const weatherIcon = document.querySelector('#weather-icon');
const temperature = document.querySelector('#temp');
const description = document.querySelector('figcaption');
const header = document.querySelector('h4');

const weatherurl = "https://api.openweathermap.org/data/2.5/weather?lat=6.27&lon=3.39&units=imperial&appid=6884df5e492c8ff4980c6b3a650eb8a0";

async function getWeatherInfo(){
    try{
        const response = await fetch(weatherurl);
        if(response.ok){
            const data = await response.json();
            console.log(data.sys.country);
            setWeather(data);
        }else{
            throw Error(await response.text());
        }

    }catch(error){
        console.log(error);
    }
}

function setWeather(data){
    temperature.innerHTML = `${Math.round(data.main.temp)}&deg;F`
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    let desc = data.weather[0].description;
    description.textContent = desc;
    header.textContent = `${data.name}, ${data.sys.country}`
}

getWeatherInfo();