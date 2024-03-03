const express = require('express');
const fs = require('fs');

const app = express();

app.get('/weather', (req, res) => {
    const { date, location } = req.query;

    if (!date || !location) {
        return res.status(400).json({ error: 'Missing required parameters: date and location' });
    }

    const weatherData = {
        "2024-03-03": {
            "New York": {
                "temperature": "15°C",
                "humidity": "50%",
                "weather": "Sunny"
            },
            "Los Angeles": {
                "temperature": "22°C",
                "humidity": "60%",
                "weather": "Cloudy"
            }
        }
    };

    const weatherInfo = weatherData;
    if (!weatherInfo) {
        return res.status(404).json({ error: 'Weather information not found for the provided date and location' });
    }
    res.json(weatherInfo);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
