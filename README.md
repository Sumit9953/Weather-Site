# Weather Dashboard 🌤️

A responsive Weather Dashboard built with **React** and **Tailwind CSS** that allows users to search for the current weather and a 5-day forecast of any city. The app integrates the **OpenWeatherMap API** for real-time weather data, enables users to save favorite cities, and remembers the last searched city using `localStorage`.

---

## Features

- **Current Weather & 5-Day Forecast**: Get real-time weather data for any city, including an icon representing the weather.
- **Favorite Cities**: Add, view, and delete favorite cities for easy access.
- **Unit Toggle**: Switch between Celsius and Fahrenheit.
- **Persistent Last Search**: Automatically loads the last searched city when the app is reloaded.
- **Styled with Tailwind CSS**: A modern and responsive design for an intuitive user experience.

---

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the application.
- **OpenWeatherMap API**: To fetch weather data.
- **JSON Server**: To store and manage favorite cities.
- **LocalStorage**: To remember the user's last searched city.

---

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed on your system.
- **OpenWeatherMap API key** (Sign up at [OpenWeatherMap](https://openweathermap.org/) to get your free API key).
- **JSON Server** for local storage (Favorite cities).

### Installation

#### 1. Clone the repository

```bash
git clone <Repo URL>
cd weather-dashboard
2. Install dependencies
Run the following command:

bash
Copy code
npm install
3. Configure the OpenWeatherMap API
Create a .env file in the root directory of your project.

Add your OpenWeatherMap API key in the .env file:

plaintext
Copy code
REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key
Note: It will take 2 hours to activate your API key.

4. Set up JSON Server for Favorite Cities
Install JSON Server globally:

bash
Copy code
npm install -g json-server
Create a db.json file in the root directory with the following content to store favorite cities:

json
Copy code
{
  "favorites": []
}
Start the JSON Server:

bash
Copy code
json-server --watch db.json --port 5000
5. Run the Application
Run the following command:

bash
Copy code
npm run dev
The app should now be running at http://localhost:3000.

Usage
Search for a City: Use the search bar to enter a city name and get the current weather and a 5-day forecast.
Toggle Units: Click the toggle button to switch between Celsius and Fahrenheit.
Manage Favorites: Add or remove cities to/from your favorites list, which persists using JSON Server.
Persistent Last Search: The app will remember and load your last searched city upon re-opening.
Folder Structure
plaintext
Copy code
.
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── WeatherDashboard.js
│   │   ├── Search.js
│   │   ├── WeatherDisplay.js
│   │   └── Favorites.js
│   ├── App.js
│   └── index.js
├── db.json                  # JSON server database for storing favorite cities
└── tailwind.config.js
