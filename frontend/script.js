const cityInput =
    document.getElementById("cityInput");

const searchButton =
    document.getElementById("searchButton");

const cityName =
    document.getElementById("cityName");

const weatherDescription =
    document.getElementById("weatherDescription");

const temperature =
    document.getElementById("temperature");

const feelsLike =
    document.getElementById("feelsLike");

const humidity =
    document.getElementById("humidity");

const windSpeed =
    document.getElementById("windSpeed");

const weatherIcon =
    document.getElementById("weatherIcon");

const errorMessage =
    document.getElementById("errorMessage");

const historyDropdown =
    document.getElementById("historyDropdown");

const historyList =
    document.getElementById("historyList");




async function getWeather(city) {

    try {

        errorMessage.textContent = "";

        searchButton.textContent =
            "Searching...";

        searchButton.disabled = true;


        const response = await fetch(
            `http://localhost:5000/weather?city=${encodeURIComponent(city)}`
        );


        const data =
            await response.json();


        if (!response.ok) {

            throw new Error(
                data.error ||
                "Unable to fetch weather"
            );

        }


       

        cityName.textContent =
            `${data.city}, ${data.country}`;


        

        weatherDescription.textContent =
            data.description;


       

        temperature.textContent =
            Math.round(data.temperature);


        

        feelsLike.textContent =
            `${Math.round(data.feelsLike)}°C`;


        

        humidity.textContent =
            `${data.humidity}%`;


        

        windSpeed.textContent =
            `${data.windSpeed} m/s`;


        

        const description =
            data.description.toLowerCase();


        if (
            description.includes("thunder")
        ) {

            weatherIcon.textContent =
                "⛈️";

        }

        else if (
            description.includes("rain")
        ) {

            weatherIcon.textContent =
                "🌧️";

        }

        else if (
            description.includes("snow")
        ) {

            weatherIcon.textContent =
                "❄️";

        }

        else if (
            description.includes("cloud")
        ) {

            weatherIcon.textContent =
                "☁️";

        }

        else if (
            description.includes("clear")
        ) {

            weatherIcon.textContent =
                "☀️";

        }

        else {

            weatherIcon.textContent =
                "🌤️";

        }


        

        loadHistory();


        /* Hide dropdown */

        historyDropdown.classList.remove(
            "show"
        );

    }


    catch (error) {

        console.error(error);


        cityName.textContent =
            "Unable to find city";


        weatherDescription.textContent =
            "";


        temperature.textContent =
            "--";


        feelsLike.textContent =
            "--°C";


        humidity.textContent =
            "--%";


        windSpeed.textContent =
            "-- m/s";


        weatherIcon.textContent =
            "🌤️";


        errorMessage.textContent =
            error.message;

    }


    finally {

        searchButton.textContent =
            "Search";

        searchButton.disabled =
            false;

    }

}





searchButton.addEventListener(
    "click",
    () => {

        const city =
            cityInput.value.trim();


        if (city === "") {

            errorMessage.textContent =
                "Please enter a city name.";

            return;

        }


        getWeather(city);

    }
);




cityInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            searchButton.click();

        }

    }
);





cityInput.addEventListener(
    "focus",
    () => {

        loadHistory();

        historyDropdown.classList.add(
            "show"
        );

    }
);



async function loadHistory() {

    try {

        const response =
            await fetch(
                "http://localhost:5000/history"
            );


        const history =
            await response.json();


        historyList.innerHTML = "";


        if (
            history.length === 0
        ) {

            historyList.innerHTML =
                `<p class="no-history">
                    No recent searches
                </p>`;

            return;

        }


        history.forEach(
            (item) => {

                const historyItem =
                    document.createElement(
                        "div"
                    );


                historyItem.className =
                    "history-item";


                const city =
                    document.createElement(
                        "span"
                    );


                city.className =
                    "history-city";


                city.textContent =
                    `📍 ${item.city}`;


                const time =
                    document.createElement(
                        "span"
                    );


                time.className =
                    "history-time";


                const date =
                    new Date(
                        item.searchedAt
                    );


                time.textContent =
                    date.toLocaleTimeString(
                        [],
                        {
                            hour: "2-digit",
                            minute: "2-digit"
                        }
                    );


                historyItem.appendChild(
                    city
                );


                historyItem.appendChild(
                    time
                );


                /* Click previous search */

                historyItem.addEventListener(
                    "click",
                    () => {

                        cityInput.value =
                            item.city;

                        getWeather(
                            item.city
                        );

                    }
                );


                historyList.appendChild(
                    historyItem
                );

            }
        );

    }


    catch (error) {

        console.error(
            "History error:",
            error
        );

    }

}




document.addEventListener(
    "click",
    (event) => {

        if (
            !event.target.closest(
                ".search-area"
            )
        ) {

            historyDropdown.classList.remove(
                "show"
            );

        }

    }
);




loadHistory();