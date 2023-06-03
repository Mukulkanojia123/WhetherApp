const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');





async function checkWeather(city){
    const api_key = "43916bf532efbb1f5788183c21660118";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_img.src = "./404.png";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    temperature.innerHTML =`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    console.log(weather_data.weather[0].main);

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "./cloudy.jpg";
            console.log("1");
            break;
        case 'Clear':
            weather_img.src = "./sunny.jpg";
            // console.log("2");

            break;
        case 'Rain':
            weather_img.src = "./rainy.webp";
            // console.log("3");

            break;
        case 'Mist':
            weather_img.src = "./mist.png";
            // console.log("4");

            break;
        case 'Snow':
            weather_img.src = "./snow.png";
            // console.log("4");

            break;
        case 'Haze' :
            weather_img.src = "./haze.jpg";
            break;

    }
    
}


searchBtn.addEventListener('click' , () =>{
    // console.log("1");
    checkWeather(inputBox.value)
})
    // checkWeather("Mumbai");
