// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

//api.openweathermap.org/data/2.5/weather?q={city name}&appid=94f67dd7caa3a058d5be9579d1273e29

var cityInputEl = document.querySelector("#city")
var cityContainerInputEl = document.querySelector("#city-container")
var repoSearchTerm = document.querySelector('#city-search-term');

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var city = cityInputEl.value.trim();
  
    if (city) {
      getApi(city);
  
      cityContainerEl.textContent = '';
      cityInputEl.value = '';
    } else {
      alert('Please enter a city');
    }
  };

function getApi() {
    // replace `octocat` with anyone else's GitHub username
    var city = ""
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=city&appid=01c6acda042379425ee30a68789c29c5';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
    }
    
getApi()