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

function getFiveDay() {
  var cityInput = document.querySelector("#city").value
  
    console.log(cityInput)


    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput},us&units=imperial&appid=01c6acda042379425ee30a68789c29c5`
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
       
      })
    }

function getCurrent(){
  var cityInput = document.querySelector("#city").value

  var secondUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput},us&units=imperial&appid=01c6acda042379425ee30a68789c29c5`

  fetch(secondUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const weatherData = data
    renderCurWeatherCard(weatherData)
    renderFiveWeatherCard(weatherData)
  })
}

function renderCurWeatherCard (weatherData){
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
  cardHeader.textContent = `${weatherData.name}`
  cardBody.textContent = `${weatherData.weather[0].icon}`
  cardBody.textContent = `Temperature:  ${weatherData.main.temp} Humidity:  ${weatherData.main.humidity} Wind speed:  ${weatherData.wind.speed}`
  appendCards.append(cardContainer)
}

function renderFiveWeatherCard (weatherData) {
  var cardContainer1 = document.createElement("div")
  var cardBodyDiv1 = document.createElement("div")
  var cardHeader1 = document.createElement("h5")
  var cardBody1 = document.createElement("p")
  cardContainer1.append(cardBodyDiv1)
  cardBodyDiv1.append(cardHeader1, cardBody1)
  cardContainer1.setAttribute("class", "card w-100")
  cardBodyDiv1.setAttribute("class", "card-body")
  cardHeader1.setAttribute("class", "card-title")
  cardBody1.setAttribute("class", "card-text")
  cardHeader1.textContent = `${weatherData.name}`
  cardBody1.textContent = `${weatherData.weather[0].icon}`
  cardBody1.textContent = `Temperature:  ${weatherData.main.temp} Humidity:  ${weatherData.main.humidity} Wind speed:  ${weatherData.wind.speed}`
  appendCards.append(cardContainer1)
  var cardContainer2 = document.createElement("div")
  var cardBodyDiv2 = document.createElement("div")
  var cardHeader2 = document.createElement("h5")
  var cardBody2 = document.createElement("p")
  cardContainer2.append(cardBodyDiv2)
  cardBodyDiv2.append(cardHeader2, cardBody2)
  cardContainer2.setAttribute("class", "card w-100")
  cardBodyDiv2.setAttribute("class", "card-body")
  cardHeader2.setAttribute("class", "card-title")
  cardBody2.setAttribute("class", "card-text")
  cardHeader2.textContent = `${weatherData.name}`
  cardBody2.textContent = `${weatherData.weather[0].icon}`
  cardBody2.textContent = `Temperature:  ${weatherData.main.temp} Humidity:  ${weatherData.main.humidity} Wind speed:  ${weatherData.wind.speed}`
  appendCards.append(cardContainer2)
  var cardContainer3 = document.createElement("div")
  var cardBodyDiv3 = document.createElement("div")
  var cardHeader3 = document.createElement("h5")
  var cardBody3 = document.createElement("p")
  cardContainer3.append(cardBodyDiv3)
  cardBodyDiv3.append(cardHeader3, cardBody3)
  cardContainer3.setAttribute("class", "card w-100")
  cardBodyDiv3.setAttribute("class", "card-body")
  cardHeader3.setAttribute("class", "card-title")
  cardBody3.setAttribute("class", "card-text")
  cardHeader3.textContent = `${weatherData.name}`
  cardBody3.textContent = `${weatherData.weather[0].icon}`
  cardBody3.textContent = `Temperature:  ${weatherData.main.temp} Humidity:  ${weatherData.main.humidity} Wind speed:  ${weatherData.wind.speed}`
  appendCards.append(cardContainer3)
  var cardContainer4 = document.createElement("div")
  var cardBodyDiv4 = document.createElement("div")
  var cardHeader4 = document.createElement("h5")
  var cardBody4 = document.createElement("p")
  cardContainer4.append(cardBodyDiv4)
  cardBodyDiv4.append(cardHeader4, cardBody4)
  cardContainer4.setAttribute("class", "card w-100")
  cardBodyDiv4.setAttribute("class", "card-body")
  cardHeader4.setAttribute("class", "card-title")
  cardBody4.setAttribute("class", "card-text")
  cardHeader4.textContent = `${weatherData.name}`
  cardBody4.textContent = `${weatherData.weather[0].icon}`
  cardBody4.textContent = `Temperature:  ${weatherData.main.temp} Humidity:  ${weatherData.main.humidity} Wind speed:  ${weatherData.wind.speed}`
  appendCards.append(cardContainer4)
  var cardContainer5 = document.createElement("div")
  var cardBodyDiv5 = document.createElement("div")
  var cardHeader5 = document.createElement("h5")
  var cardBody5 = document.createElement("p")
  cardContainer5.append(cardBodyDiv5)
  cardBodyDiv5.append(cardHeader5, cardBody5)
  cardContainer5.setAttribute("class", "card w-100")
  cardBodyDiv5.setAttribute("class", "card-body")
  cardHeader5.setAttribute("class", "card-title")
  cardBody5.setAttribute("class", "card-text")
  cardHeader5.textContent = `${weatherData.name}`
  cardBody5.textContent = `${weatherData.weather[0].icon}`
  cardBody5.textContent = `Temperature:  ${weatherData.main.temp} Humidity:  ${weatherData.main.humidity} Wind speed:  ${weatherData.wind.speed}`
  appendCards.append(cardContainer5)
}


$('.searchButton').on("click", function (event) {
  // var cityInput = document.getElementById("city").value
    event.preventDefault()
    getFiveDay()
    getCurrent()
})
