const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { Console } = require('console');

const app = express();
app.use(cors());

app.get('/weather', (req, res) => {
    const { date, location } = req.query;

    if (!date || !location) {
        return res.status(400).json({ error: 'Missing required parameters: date and location' });
    }

    const weatherData = {
        "2024-03-03": {
            "HN": {
                "temperature": "15°C",
                "humidity": "50%",
                "weather": "Sunny"
            },
            "HCM": {
                "temperature": "22°C",
                "humidity": "60%",
                "weather": "Cloudy"
            }
        },
        "2024-03-02": {
            "HN": {
                "temperature": "15°C",
                "humidity": "50%",
                "weather": "Sunny"
            },
            "HCM": {
                "temperature": "22°C",
                "humidity": "60%",
                "weather": "Cloudy"
            }
        },
        "2024-03-01": {
            "HCM": {
                "temperature": "15°C",
                "humidity": "50%",
                "weather": "Sunny"
            },
            "HN": {
                "temperature": "22°C",
                "humidity": "60%",
                "weather": "Cloudy"
            }
        }
    };

    const weatherInfo = weatherData[date][location];
    
    if (!weatherInfo) {
        return res.status(404).json({ error: 'Weather information not found for the provided date and location' });
    }
    res.json(weatherInfo);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
