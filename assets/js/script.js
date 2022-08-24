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

const appendCards = document.getElementById("appendCards")
function getApi() {
  var cityInput = document.querySelector("#city").value
  
    console.log(cityInput)


    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=01c6acda042379425ee30a68789c29c5`
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        const weatherData = data
        renderWeatherCard(weatherData)
      })
    }

function renderWeatherCard (weatherData){
  var cardContainer = document.createElement("div")
  var cardBodyDiv = document.createElement("div")
  var cardHeader = document.createElement("h5")
  var cardBody = document.createElement("p")
  var cardButton = document.createElement("a")
  cardContainer.append(cardBodyDiv)
  cardBodyDiv.append(cardHeader, cardBody, cardButton)
  cardContainer.setAttribute("class", "card w-100")
  cardBodyDiv.setAttribute("class", "card-body")
  cardHeader.setAttribute("class", "card-title")
  cardBody.setAttribute("class", "card-text")
  cardButton.setAttribute("class", "btn btn-primary")
  cardButton.setAttribute("target", "_blank")
  cardHeader.textContent = `${weatherData.city.name}`
  appendCards.append(cardContainer)
  // cardBody.textContent = `${weatherData.}`
}

$('.searchButton').on("click", function (event) {
  // var cityInput = document.getElementById("city").value
    event.preventDefault()
    getApi()
})
