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
        city: 'Stockholm',
        degree: 0,
        description: '',
        weatherCode: 0,
        isSuccess: true,
        isFetching: false,
    };

    componentWillMount() {
        this.setState({ isFetching: true });
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
                    isSuccess: true,
                    isFetching: false,
                });
            })
            .catch(error => {
                this.setState({
                    isSuccess: false,
                    isFetching: false,
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
                    isSuccess={this.state.isSuccess}
                    isFetching={this.state.isFetching}
                />
            </React.Fragment>
        );
    }
}
