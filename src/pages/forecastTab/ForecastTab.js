import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ForecastTab.css';

const apiKey = "806cc3d057152681db018de2a7851477";

function ForecastTab({coordinates}) {
    const [forecasts, setForecasts] = useState(null);

    function createDateString(timestamp) {
        const day = new Date(timestamp * 1000);

        return day.toLocaleDateString('nl-NL', {weekday: 'long'});
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates?.lat}&lon=${coordinates?.lon}&exclude=minutely,current,hourly&appid=${apiKey}&lang=nl`);
                setForecasts(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        if (coordinates) {
            fetchData();
        }

    }, [coordinates]);


    return (
        <div className="tab-wrapper">
            {forecasts && forecasts.map((forecast) => {
                return (
                    <article className="forecast-day" key={forecast.dt}>
                        <p className="day-description">
                            {createDateString(forecast.dt)}
                        </p>
                        <section className="forecast-weather">
                            <span>
                                {forecast.temp.day}
                            </span>
                            <span className={"weather-description"}>
                                {forecast.weather[0].description}
                            </span>
                        </section>
                    </article>
                )
            })}
        </div>
    );
}

export default ForecastTab;
