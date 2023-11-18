const weatherForecast = document.querySelector('#forecast');
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=6.27&lon=3.39&units=imperial&appid=6884df5e492c8ff4980c6b3a650eb8a0";
const weatherInfo = document.querySelector('#weather');


async function getData(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data.list);
            loadForecast(data);
        }else{
            throw Error(await response.text());
        }

    }catch(error){
        console.log(error);
    }
}
function loadForecast(data){ 
   const weatherCard = document.createElement('article');
   const weatherNow = document.createElement('div');
   const dayIcon = document.createElement('img');
   const dayNum = document.createElement('span');
   const speed = document.createElement('p');
   const chill = document.createElement('p');
   dayNum.setAttribute('id', 'temp');
   const dayDescr = document.createElement('span');
   const weatherHead = document.createElement('h3');
   const forecastHead = document.createElement('h3');
   const iconsource = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
   const todayDesc = data.list[0].weather[0].description;


   speed.textContent = `Wind Speed: ${data.list[0].wind.speed} mph`;
   



   weatherHead.textContent = "Current Weather"
   dayIcon.setAttribute('src', iconsource);
   dayIcon.setAttribute('alt', `Icon for ${todayDesc}`);
   dayNum.innerHTML = `${Math.round(data.list[0].main.temp)}&deg;F`;
   let indexOftempType = dayNum.innerHTML.length - 1;
   let temperature = Number(data.list[0].main.temp);
   let tC;
   if (dayNum[indexOftempType] == "C"){
    temperature = ((9/5) * temperature) + 32;
   }
   if (temperature <= 50 && speed > 3){
    
    tC = `${Math.round(35.74 + (0.6215 * temperature) - (35.75 * speed**0.16) + (0.4275 * temperature * speed ** 0.16))}&deg;F`;
   }else{
    tC = "N/A"
   }
   chill.textContent = `Wind Chill: ${tC}`;
   dayDescr.textContent = `  ${todayDesc}`;
    weatherNow.appendChild(weatherHead)
   weatherNow.appendChild(dayIcon);
   weatherNow.appendChild(dayNum);
   weatherNow.appendChild(dayDescr);
   weatherCard.appendChild(weatherNow);
   weatherCard.appendChild(speed);
   weatherCard.appendChild(speed);
   weatherCard.appendChild(chill);
   weatherInfo.append(weatherCard);
 
}

getData();