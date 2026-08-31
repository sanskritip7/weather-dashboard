# 🌦️ Weather Dashboard

A web-based Weather Dashboard that allows users to search for the current weather information of any city. The application uses the OpenWeather API to retrieve real-time weather data and MongoDB to store recent city searches.

---

## 📌 Project Overview

The Weather Dashboard is designed to provide users with a simple and interactive way to check current weather conditions.

Users can enter the name of a city and receive information such as:

- 🌡️ Current temperature
- 🌡️ Feels-like temperature
- 💧 Humidity
- 💨 Wind speed
- 🌤️ Weather description
- 🌍 Country information

The application also stores searched cities in MongoDB and displays them as recent searches.

---

## 🎯 Objectives

The main objectives of this project are:

1. To develop a user-friendly weather dashboard.
2. To retrieve real-time weather information using an API.
3. To implement a backend using Node.js and Express.js.
4. To store recent search history using MongoDB.
5. To connect the frontend, backend, API, and database into one application.
6. To understand REST API communication in web applications.

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature
- 🌡️ Display feels-like temperature
- 💧 Display humidity
- 💨 Display wind speed
- 🌤️ Display weather conditions
- 🕐 Store recent searches
- 📋 Display recent searches in a dropdown
- 📱 Responsive frontend design
- ❌ Error handling for invalid cities
- 🔐 Secure use of environment variables for API and database credentials

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### API

- OpenWeather API

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

---

## 🏗️ Project Structure

```text
weather/
│
├── backend/
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🔄 How the Application Works

The Weather Dashboard works through communication between the frontend, backend, OpenWeather API, and MongoDB database.

1. The user enters the name of a city in the search box.
2. The frontend sends the city name to the Node.js and Express.js backend.
3. The backend sends a request to the OpenWeather API.
4. The OpenWeather API returns the current weather information.
5. The backend processes the required weather details.
6. The weather data is sent back to the frontend.
7. The frontend displays the weather information to the user.
8. The searched city is stored in the MongoDB database.
9. Previous searches are retrieved from MongoDB and displayed in the Recent Searches dropdown.

### Application Flow

```text
User
  ↓
Frontend
  ↓
Node.js + Express.js Backend
  ↓
OpenWeather API
  ↓
Weather Data
  ↓
Frontend Display
  ↓
MongoDB
  ↓
Recent Searches
```

---

## 🗄️ Database Integration

MongoDB is used in the Weather Dashboard to store recent search history.

Whenever a user searches for a city, the city name and search time are stored in the MongoDB database.

Each search record contains:

- City name
- Date and time of search

Example database record:

```json
{
  "city": "Pune",
  "searchedAt": "2026-08-30T17:41:08.893Z"
}
```

The stored search history is retrieved from MongoDB and displayed in the Recent Searches dropdown on the frontend.

Mongoose is used to connect the Node.js backend with MongoDB and manage database records.

---

## 🌐 API Integration

The Weather Dashboard uses the OpenWeather API to retrieve real-time weather information for the searched city.

When a user searches for a city, the backend sends a request to the OpenWeather API. The API returns weather data, which is processed by the backend and sent to the frontend.

The application uses the API data to display:

- Current temperature
- Feels-like temperature
- Humidity
- Wind speed
- Weather description
- Country information

The OpenWeather API key is stored securely as an environment variable and is not included in the GitHub repository.

---

## ⚙️ Setup and Installation

Follow these steps to run the Weather Dashboard locally.

### 1. Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/sanskritip7/weather-dashboard.git
```

### 2. Open the Project

Navigate to the project folder:

```bash
cd weather-dashboard
```

### 3. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend` folder.

Add the required credentials:

```env
MONGODB_URI=your_mongodb_connection_string
OPENWEATHER_API_KEY=your_openweather_api_key
```

The actual MongoDB connection string and OpenWeather API key should not be shared publicly.

The `.env` file is excluded from the GitHub repository using `.gitignore`.

### 5. Start the Backend

Navigate to the backend folder:

```bash
cd backend
```

Start the Node.js server:

```bash
node server.js
```

If the setup is correct, the server will run on:

```text
http://localhost:5000
```

### 6. Open the Frontend

Open the following file in a web browser:

```text
frontend/index.html
```

The Weather Dashboard can then be used to search for cities and view their current weather information.

---

## 🔐 Security

Sensitive credentials are not stored directly in the source code.

The following information is stored in environment variables:

- MongoDB connection string
- OpenWeather API key

The `.env` file is included in `.gitignore` to prevent sensitive information from being uploaded to GitHub.

Users running the project should create their own `.env` file with their own credentials.

---

## 🧪 Testing

The Weather Dashboard was tested using different city names to verify its functionality.

### Test Cases

| Test Case | Expected Result |
|---|---|
| Enter a valid city | Weather information is displayed |
| Enter an invalid city | An error message is displayed |
| Leave the search box empty | User is asked to enter a city |
| Search for a city | Search is stored in MongoDB |
| Open Recent Searches | Previously searched cities are displayed |
| Search multiple cities | Recent searches are updated |
| Press Enter after entering a city | Weather search is performed |

### Example Cities Tested

- Pune
- Mumbai
- Delhi
- Bengaluru

---

## 📊 Sample Output

Example weather information returned for Pune:

```json
{
  "city": "Pune",
  "country": "IN",
  "temperature": 23.97,
  "feelsLike": 24.09,
  "humidity": 64,
  "description": "broken clouds",
  "windSpeed": 3.61
}
```

Example MongoDB search record:

```json
{
  "city": "Pune",
  "searchedAt": "2026-08-30T17:41:08.893Z"
}
```

---

## 🎓 Learning Outcomes

Through this project, the following concepts were learned and implemented:

- Frontend web development
- Backend development using Node.js and Express.js
- REST API integration
- API request and response handling
- MongoDB database integration
- Mongoose
- Environment variable management
- Error handling
- Client-server communication
- Git and GitHub version control

---

## 🚀 Future Enhancements

The following features can be added in future versions:

- 🌍 Multi-day weather forecasts
- 📍 Automatic location detection
- 🌙 Dark mode
- 🌧️ Weather alerts
- 📊 Weather charts and graphs
- ⭐ Favorite cities
- 📱 Progressive Web App support
- 🌐 Deployment as a live web application

---

## 👩‍💻 Author

**Sanskriti**

Weather Dashboard  
Internship Project – 2026

---

## 📄 License

This project was developed for educational and internship purposes.