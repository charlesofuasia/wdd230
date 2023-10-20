let temperature = parseInt(document.querySelector("#temp").textContent);
const windSpeed = parseFloat(document.querySelector("#speed").textContent);
const windChill = document.querySelector("#chill");
const grade = document.querySelector("#grade").textContent;

let Tc;

if (grade == "C"){
    temperature = ((9/5) * temperature) + 32;
}


if ( temperature <= 50 && windSpeed > 3.0){
    Tc = Math.round(35.74 + (0.6215 * temperature) - (35.75 * windSpeed**0.16) + (0.4275 * temperature * windSpeed ** 0.16))

}else{
    Tc = "N/A"
}

windChill.innerHTML = Tc;