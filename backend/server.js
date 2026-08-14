const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Weather Dashboard Backend is running!");
});

// Weather API route
app.get("/api/weather/:city", async (req, res) => {
    try {
        const city = req.params.city;

        const apiKey = process.env.WEATHER_API_KEY;

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                error: data.message || "Unable to fetch weather data"
            });
        }

        res.json(data);

    } catch (error) {
        console.error("Error fetching weather:", error);

        res.status(500).json({
            error: "Server error while fetching weather data"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});