let city = document.getElementById("city");
let country = document.getElementById("country");
let temp = document.getElementById("temp");
let weatherType = document.getElementById("weather-type");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("wind-speed");
let clouds = document.getElementById("clouds");
let feelsLike = document.getElementById("feels-like");
let weatherImgTemp = document.getElementById("weather-img-temp")


navigator.geolocation.getCurrentPosition((location) => {
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            console.log()
            city.innerHTML = res.name;
            country.innerHTML = res.sys.country;
            // weatherImg.innerHTML = ;
            temp.innerHTML = Math.round(res.main.temp) + "°";
            weatherType.innerHTML = res.weather[0].main;
            humidity.innerHTML = res.main.humidity + "%";
            feelsLike.innerHTML = res.main.feels_like + "%";
            clouds.innerHTML = res.clouds.all + "%";
            windSpeed.innerHTML = res.wind.speed + "km/h";

            if (res.weather[0].main == "Haze") {
                weatherImgTemp.src = 'Images/haze.svg';
            } else if (res.weather[0].main == "Rain") {
                weatherImgTemp.src = 'Images/rain.svg';
            } else if (res.weather[0].main == "smoke") {
                weatherImgTemp.src = 'Images/smoke.svg';
            } else if (res.weather[0].main == "clear") {
                weatherImgTemp.src = 'Images/clear-day.svg';
            }
        })
        .catch((rej) => {
            console.log(rej)
        })
})

let weatherLocation = document.getElementById("weather-location");

let getWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation.value}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            console.log()
            city.innerHTML = res.name;
            country.innerHTML = res.sys.country;
            // weatherImg.innerHTML = ;
            temp.innerHTML = Math.round(res.main.temp) + "°";
            weatherType.innerHTML = res.weather[0].main;
            humidity.innerHTML = res.main.humidity + "%";
            feelsLike.innerHTML = res.main.feels_like + "%";
            clouds.innerHTML = res.clouds.all + "%";
            windSpeed.innerHTML = res.wind.speed + "km/h";

            if (res.weather[0].main == "Haze") {
                weatherImgTemp.src = 'Images/haze.svg';
            } else if (res.weather[0].main == "Rain") {
                weatherImgTemp.src = 'Images/rain.svg';
            } else if (res.weather[0].main == "Smoke") {
                weatherImgTemp.src = 'Images/smoke.svg';
            } else if (res.weather[0].main == "Clear") {
                weatherImgTemp.src = 'Images/clear-day.svg';
            }
        })
        .catch((rej) => {
            console.log(rej)
        })
}