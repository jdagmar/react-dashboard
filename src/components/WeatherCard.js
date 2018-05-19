import React, { Component } from 'react';
import ClearIcon from '../icons/weather_sun.svg';
import ThunderIcon from '../icons/weather_tempest.svg';
import RainIcon from '../icons/weather_rain.svg';
import SnowIcon from '../icons/weather_snow.svg';
import WindIcon from '../icons/weather_wind.svg';

function WeatherCard({ city, degree, description, weatherCode }) {
    let WeatherIcon = '';

    switch (Math.floor(weatherCode / 100)) {
        case 8:
            WeatherIcon = ClearIcon;
            break;
        case 2:
            WeatherIcon = ThunderIcon;
            break;
        case 3:
        case 5:
            WeatherIcon = RainIcon;
            break;
        case 6:
            WeatherIcon = SnowIcon;
            break;
        case 7:
            WeatherIcon = WindIcon;
            break;
    }

    return (
        <div className="border border-grey p-6 w-1/4 flex justify-around">
            <img src={WeatherIcon} />
            <div>
                <p>{city}</p>
                <p>{Math.round(degree)}&#8451;</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default WeatherCard;
