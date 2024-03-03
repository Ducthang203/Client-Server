
import React, { useState } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const handleGetWeather = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/weather?date=${date}&location=${location}`);
            setWeatherData(response.data);
            setError(null);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('An error occurred while fetching weather data');
            setWeatherData(null);
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <div>
                <label>Date: </label>
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
                <label>Location: </label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <button onClick={handleGetWeather}>Get Weather</button>
            {weatherData && (
                <div>
                    <h2>Weather Information</h2>
                    <p>Location: {location}</p>
                    <p>Weather: {weatherData.weather}</p>
                    <p>Temperature: {weatherData.temperature}</p>
                    <p>Humidity: {weatherData.humidity}</p>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default WeatherComponent;
