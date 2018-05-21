import React, { Component } from 'react';
import { WeatherCard } from './WeatherCard';

const getDegree = weatherData => {
    return weatherData.main.temp;
};

const getDescription = weatherData => {
    return weatherData.weather.map(weather => weather.main).join('');
};

const getWeatherCode = weatherData => {
    return weatherData.weather.map(weather => weather.id);
};

export class GetWeather extends Component {
    state = {
        city: 'stockholm',
        degree: 0,
        description: '',
        weatherCode: 0,
    };

    componentWillMount() {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${
                this.state.city
            }&APPID=50182582175ed60ea90f269ea76e975d&units=metric`
        )
            .then(response => response.json())
            .then(weatherData => {
                this.setState({
                    degree: getDegree(weatherData),
                    description: getDescription(weatherData),
                    weatherCode: getWeatherCode(weatherData),
                });
            });
    }
    render() {
        return (
            <React.Fragment>
                <WeatherCard
                    city={this.state.city}
                    degree={this.state.degree}
                    description={this.state.description}
                    weatherCode={this.state.weatherCode}
                />
            </React.Fragment>
        );
    }
}
