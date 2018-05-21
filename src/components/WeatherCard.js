import React, { Component } from 'react';
import ClearIcon from '../icons/weather_sun.svg';
import ThunderIcon from '../icons/weather_tempest.svg';
import RainIcon from '../icons/weather_rain.svg';
import SnowIcon from '../icons/weather_snow.svg';
import WindIcon from '../icons/weather_wind.svg';
import WeatherCardIcon from '../icons/weather_variable_fullmoon.svg';

export const WeatherCard = ({ city, degree, description, weatherCode }) => {
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
        <div className="shadow flex w-1/4">
            <div className="bg-blue-light flex p-4">
                <img src={WeatherCardIcon} alt=" " />
            </div>
            <div className="w-full p-6 flex justify-around bg-white">
                <div className="leading-normal">
                    <p>{city}</p>
                    <p>{Math.round(degree)}&#8451;</p>
                    <p>{description}</p>
                </div>
                <img className="w-8" src={WeatherIcon} alt=" " />
            </div>
        </div>
    );
};
