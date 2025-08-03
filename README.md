# Weather App

A beautiful and responsive weather application built with React and Vite. Get real-time weather information for any city worldwide.

## Features

- 🌤️ Real-time weather data
- 🔍 Search by city name
- 📱 Responsive design
- 🌡️ Temperature in Celsius
- 💨 Wind speed and direction
- 💧 Humidity levels
- 🔄 Atmospheric pressure
- 🎨 Beautiful gradient UI

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- An API key from OpenWeatherMap

### Installation

1. Clone this repository or download the files
2. Install dependencies:
   ```bash
   npm install
   ```

### Getting Your API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to the API keys section in your account
4. Generate a new API key
5. Copy the API key

### Setting Up the API Key

You have two options to set up your API key:

#### Option 1: Using Environment Variables (Recommended)
1. Open the `.env` file in the project root
2. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```
   VITE_WEATHER_API_KEY=abcd1234efgh5678ijkl9012mnop3456
   ```
3. Save the file and restart the development server

#### Option 2: Direct Code Update
1. Open `src/App.jsx`
2. Find the line: `const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'YOUR_API_KEY'`
3. Replace `'YOUR_API_KEY'` with your actual API key from OpenWeatherMap
4. Save the file

Example:
```javascript
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'abcd1234efgh5678ijkl9012mnop3456'
```

**Important**: Never commit your API key to version control. The `.env` file is already added to `.gitignore` to protect your API key.

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173`
3. Enter a city name and click "Search" to get weather information

## Usage

1. Type a city name in the search box
2. Press Enter or click the "Search" button
3. View the current weather information including:
   - Current temperature
   - Weather description
   - Feels like temperature
   - Humidity percentage
   - Wind speed
   - Atmospheric pressure

## Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **OpenWeatherMap API** - Weather data source
- **CSS3** - Styling with gradients and animations

## Project Structure

```
weather-app/
├── src/
│   ├── App.jsx          # Main weather app component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── public/
├── package.json
└── README.md
```

## API Reference

This app uses the OpenWeatherMap Current Weather Data API:
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**: 
  - `q`: City name
  - `appid`: Your API key
  - `units`: metric (for Celsius)

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
