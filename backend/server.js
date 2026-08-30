require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("❌ MongoDB connection error:", error.message);
  });

// Search history schema
const searchSchema = new mongoose.Schema({
  city: String,
  searchedAt: {
    type: Date,
    default: Date.now
  }
});

const Search = mongoose.model("Search", searchSchema);

// Weather API
app.get("/weather", async (req, res) => {
  try {
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({
        error: "Please enter a city"
      });
    }

    // Get weather from OpenWeather
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: process.env.WEATHER_API_KEY,
          units: "metric"
        }
      }
    );

    const weather = response.data;

    // Save search in MongoDB
    await Search.create({
      city: city
    });

    // Send weather to frontend
    res.json({
      city: weather.name,
      country: weather.sys.country,
      temperature: weather.main.temp,
      feelsLike: weather.main.feels_like,
      humidity: weather.main.humidity,
      description: weather.weather[0].description,
      windSpeed: weather.wind.speed
    });

  } catch (error) {
    console.log("Weather error:", error.message);

    if (error.response) {
      return res.status(error.response.status).json({
        error: error.response.data.message || "Unable to get weather"
      });
    }

    res.status(500).json({
      error: "Server error"
    });
  }
});

// Get search history
app.get("/history", async (req, res) => {
  try {
    const history = await Search.find()
      .sort({ searchedAt: -1 })
      .limit(10);

    res.json(history);
  } catch (error) {
    res.status(500).json({
      error: "Unable to get search history"
    });
  }
});

// Home route
app.get("/", (req, res) => {
  res.send("Weather Dashboard Backend is running!");
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});