// Weather APP

const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = ""; // use apikey

weatherForm.addEventListener("submit", async event => { // async because we need to use awaits in here
    event.preventDefault(); // preventing the default behaviour of forms refreshing.

    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city); // fetching the weather data
            displayWeatherInfo(weatherData); // pushing it into here
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please Enter A City");
    }
});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
};

function displayWeatherInfo(data){
    console.log(data)
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{id, description}]} = data;  // destructuring.
    
    card.textContent = "";
    card.style.display = "flex";

    // creating the elements
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    // setting their textContent
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp.toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}`;
    descDisplay.textContent = description; 
    weatherEmoji.textContent = getWeatherEmoji(id);

    // adding the classes for css
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    // appending them
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay)
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
};

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️"; 
        case (weatherId >= 300 && weatherId < 500):
            return "🌦️"; 
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️"; 
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800 ):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810 ):
            return "☁️"; 
        default:
            return  "🤔";
    }
};

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
};