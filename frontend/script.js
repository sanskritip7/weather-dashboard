const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

const cityName = document.getElementById("cityName");
const weatherDescription = document.getElementById("weatherDescription");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const errorMessage = document.getElementById("errorMessage");

async function getWeather(city) {
    try {
        errorMessage.textContent = "";

        const response = await fetch(
            `http://localhost:5000/api/weather/${encodeURIComponent(city)}`
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Unable to fetch weather");
        }

        cityName.textContent = data.name;
        weatherDescription.textContent = data.weather[0].description;

        temperature.textContent = Math.round(data.main.temp);
        humidity.textContent = `${data.main.humidity}%`;
        windSpeed.textContent = `${data.wind.speed} m/s`;

    } catch (error) {
        console.error(error);

        cityName.textContent = "Unable to find city";
        weatherDescription.textContent = "";
        temperature.textContent = "--";
        humidity.textContent = "--%";
        windSpeed.textContent = "-- m/s";

        errorMessage.textContent = error.message;
    }
}

searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        errorMessage.textContent = "Please enter a city name.";
        return;
    }

    getWeather(city);
});

cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchButton.click();
    }
});