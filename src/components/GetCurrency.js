import React, { Component } from 'react';
import { ExchangeCard } from './ExchangeCard';

const getSek = currencyData => {
    return currencyData.rates.SEK;
};

const getEuro = currencyData => {
    return currencyData.rates.EUR;
};

const getTimestamp = currencyData => {
    return currencyData.date;
};

export class GetCurrency extends Component {
    state = {
        euro: 0,
        sek: 0,
        timestamp: 0,
    };

    componentWillMount() {
        fetch(
            'http://data.fixer.io/api/latest?access_key=1c66f4d5cb5e0f7ae27733ec8a85bca4'
        )
            .then(response => response.json())
            .then(currencyData => {
                this.setState({
                    euro: getEuro(currencyData),
                    sek: getSek(currencyData),
                    timestamp: getTimestamp(currencyData),
                });
            });
    }

    render() {
        return (
            <React.Fragment>
                <ExchangeCard
                    euro={this.state.euro}
                    sek={this.state.sek}
                    timestamp={this.state.timestamp}
                />
            </React.Fragment>
        );
    }
}
