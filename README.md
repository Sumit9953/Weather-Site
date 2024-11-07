<h1>Weather Dashboard 🌤️ </h1>
</br>
A responsive Weather Dashboard built with React and Tailwind CSS that allows users to search for the current weather and a 5-day forecast of any city. The app integrates the OpenWeatherMap API for real-time weather data, enables users to save favorite cities, and remembers the last searched city using localStorage.
</br>
Features
Current Weather & 5-Day Forecast: Get real-time weather data for any city, including an icon representing the weather.
Favorite Cities: Add, view, and delete favorite cities for easy access.
Unit Toggle: Switch between Celsius and Fahrenheit.
Persistent Last Search: Automatically loads the last searched city when the app is reloaded.
Styled with Tailwind CSS: A modern and responsive design for an intuitive user experience.
Technologies Used
React: For building the user interface.
Tailwind CSS: For styling the application.
OpenWeatherMap API: To fetch weather data.
JSON Server: To store and manage favorite cities.
LocalStorage: To remember the user's last searched city.
</br>

Getting Started
Prerequisites
Node.js and npm installed on your system
OpenWeatherMap API key (Sign up at OpenWeatherMap to get your free API key)
JSON Server for local storage (Favorite cities)
</br>
Installation
</br>
Clone the repository
</br>
git clone Repo URL</br>
cd weather-dashboard
</br>
Install dependencies</br>
Run Coomand On Terminal:- npm install
</br>
Configure the OpenWeatherMap API
</br>
Create a .env file in the root directory of your project.
</br>
Add your OpenWeatherMap API key in the .env file:</br>
REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key</br>
(Note: It will take 2 hours to Activate your API KEY)</br>
</br>
Set up JSON Server for Favorite Cities</br>
Install JSON Server globally:</br>
</br>
Run Coomand On Terminal:- npm install -g json-server
</br>
Create a db.json file in the root directory with the following content to store favorite cities:
</br>
{
  "favorites": []
}
</br>
Start the JSON Server:
</br>
Run Coomand On Terminal:- json-server --watch db.json --port 5000
</br>
Run the Application
</br>
Run Coomand On Terminal:- npm run dev
</br>
The app should now be running at http://localhost:3000.
</br>
Usage
Search for a City: Use the search bar to enter a city name and get the current weather and a 5-day forecast.
Toggle Units: Click the toggle button to switch between Celsius and Fahrenheit.
Manage Favorites: Add or remove cities to/from your favorites list, which persists using JSON Server.
Persistent Last Search: The app will remember and load your last searched city upon re-opening.
Folder Structure
</br>
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
