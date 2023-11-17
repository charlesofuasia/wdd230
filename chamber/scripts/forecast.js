const weatherForecast = document.querySelector('#forecast');
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=6.27&lon=3.39&units=imperial&appid=6884df5e492c8ff4980c6b3a650eb8a0";



async function getData(){
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data.list);
        }else{
            throw Error(await response.text());
        }

    }catch(error){
        console.log(error);
    }
}
function loadForecast(data){
    data.list.forEach(element => {
        const dayForecast = document.createElement('div');
       // const timeStamp = Number(element.data.main)
        
    });

}
getData();