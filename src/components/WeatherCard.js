import React from 'react';
import ClearIcon from '../icons/weather_sun.svg';
import ThunderIcon from '../icons/weather_tempest.svg';
import RainIcon from '../icons/weather_rain.svg';
import SnowIcon from '../icons/weather_snow.svg';
import WindIcon from '../icons/weather_wind.svg';
import WeatherCardIcon from '../icons/weather_variable_fullmoon.svg';
import SadIcon from '../icons/basic_elaboration_message_sad.svg';

export const WeatherCard = ({
    city,
    degree,
    description,
    weatherCode,
    isSuccess,
}) => {
    let WeatherIcon = '';

    switch (Math.floor(weatherCode / 100)) {
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
        default:
            WeatherIcon = ClearIcon;
            break;
    }

    return (
        <div className="shadow flex w-full lg:w-1/4 m-auto mb-2 lg:h-full">
            <div className="bg-blue-light flex p-4">
                <img src={WeatherCardIcon} alt=" " />
            </div>
            <div className="w-full p-6 flex justify-center lg:justify-around bg-white">
                {isSuccess ? (
                    <React.Fragment>
                        <div className="leading-normal">
                            <p>{city}</p>
                            <p>{Math.round(degree)}&#8451;</p>
                            <p>{description}</p>
                        </div>
                        <img
                            className="w-8 h-8 ml-2 self-center"
                            src={WeatherIcon}
                            alt=" "
                        />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p className="w-24 leading-tight">
                            Weather not available at the moment
                        </p>
                        <img className="w-8 h-8" src={SadIcon} alt=" " />
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};
