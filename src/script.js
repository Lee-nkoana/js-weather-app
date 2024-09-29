function updateWeather(response){
    let temperature = document.querySelector("#temperature");
    let city = document.querySelector("#city");
    let humidity = document.querySelector("#humidity");
    let windSpeed = document.querySelector("#wind");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let icon = document.querySelector("#weather-icon")

    temperature.innerHTML = Math.round(response.data.temperature.current);
    city.innerHTML = response.data.city;
    humidity.innerHTML =`${response.data.temperature.humidity}%`;
    windSpeed.innerHTML = `${response.data.wind.speed} km/h`;
    timeElement.innerHTML = formatDate(date)
    icon.innerHTML = `<img src="${response.data.conditon.icon_url}" >`;
}

function formatDate(date){
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if (minutes<10){
        minutes = `0${minutes}`
    }

    return `${day} ${hour}:${minutes}`;
}

function searchCity(city){
    let apiKey = "9ba93269c3cc37t4f08ec24abo3d1253";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(updateWeather);
}

function handleSearch(event){
    event.preventDefault();
    let citySearch = document.querySelector("#search-input");
    searchCity(citySearch.value);
}

let searhForm = document.querySelector("#search-weather");
searhForm.addEventListener("submit", handleSearch);

searchCity("cape town")