import React from 'react';
import ClearIcon from '../icons/weather_sun.svg';
import ThunderIcon from '../icons/weather_tempest.svg';
import RainIcon from '../icons/weather_rain.svg';
import SnowIcon from '../icons/weather_snow.svg';
import WindIcon from '../icons/weather_wind.svg';
import WeatherCardIcon from '../icons/weather_variable_fullmoon.svg';
import FailIcon from '../icons/basic_elaboration_message_sad.svg';

const getWeatherIcon = weatherCode => {
    /* convert ex all weathercodes starting with 500 to 
    the weathergroup 5 for easier management of weathericons */
    const weatherGroup = Math.floor(weatherCode / 100);

    switch (weatherGroup) {
        case 2:
            return ThunderIcon;
        case 3:
        case 5:
            return RainIcon;
        case 6:
            return SnowIcon;
        case 7:
            return WindIcon;
        default:
            return ClearIcon;
    }
};

export const WeatherCard = ({
    city,
    degree,
    description,
    weatherCode,
    isSuccess,
}) => {
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
                            src={getWeatherIcon(weatherCode)}
                            alt=" "
                        />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p className="w-24 leading-tight">
                            Weather not available at the moment
                        </p>
                        <img className="w-8 h-8" src={FailIcon} alt=" " />
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};
