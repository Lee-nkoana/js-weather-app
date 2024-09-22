function handleSearch(event){
    event.preventDefault();
    let citySearch = document.querySelector("#search-input");
    let city = document.querySelector("#city");
    city.innerHTML = citySearch.value;
}

let searhForm = document.querySelector("#search-weather");
searhForm.addEventListener("submit", handleSearch);