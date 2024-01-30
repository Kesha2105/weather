const inputBox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weather_img = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.Description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city){
    const api_key = "7191fc8bceeabf880ba716a4aac4d592";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(respnose => respnose.json());

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;
    console.log("Weather condition:", weather_data.weather[0].main);

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "pictures/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "pictures/clear.png";
            break;    
        case 'Rain':
            weather_img.src = "pictures/rain.png";
            break;
        case 'Smoke':
            weather_img.src = "pictures/mist.png";
            break;
        case 'Snow':
            weather_img.src = "pictures/snow.png";
            break;
            
    }
    console.log(weather_data);
    }

    



searchbtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
})
