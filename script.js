const input = document.querySelector("#input");
const searchBtn = document.querySelector(".search_btn");
const weather_body = document.querySelector(".weather_body");
const image = document.querySelector(".image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity_value = document.querySelector(".humidity_value");
const wind_value = document.querySelector(".wind_value");
const errors = document.querySelector(".error");

async function checkWeather(city) {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=485346c7258b0352978bc05e35cab12b`;
    const weather_data = await fetch(`${api}`).then(response => response.json());

    if (weather_data.cod == `404`) {
        errors.style.display = "flex";
        weather_body.style.display = "none";
    } else {
        errors.style.display = "none";
        weather_body.style.display = "flex";
        temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
        description.innerHTML = `${weather_data.weather[0].description}`;
        humidity_value.innerHTML = `${weather_data.main.humidity}%`;
        wind_value.innerHTML = `${weather_data.wind.speed}Km/H`;

        switch (weather_data.weather[0].main) {
            case "Clouds":
                image.src = "./cloud.png";
                break;
            case "Clear":
                image.src = "./clear.png";
                break;
            case "Smoke":
                image.src = "./smoke.png";
                break;
            case "Dust":
                image.src = "./smoke.png";
                break;
            case "Rain":
                image.src = "./rain.png";
                break;
            case "Mist":
                image.src = "./mist.png";
                break;
            case "Snow":
                image.src = "./snow.png";
                break;
        }
    }





    console.log(weather_data)
}






searchBtn.addEventListener("click", function () {
    checkWeather(input.value);
})



