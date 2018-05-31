import React, { Component } from 'react';
import { ExchangeCard } from './ExchangeCard';

const getSek = currencyData => {
    return currencyData.rates.SEK;
};

const getEuro = currencyData => {
    return currencyData.rates.EUR;
};

const getDate = currencyData => {
    return new Date(currencyData.timestamp * 1000);
};

export class GetExchangeRates extends Component {
    state = {
        sek: localStorage.getItem('sek') || 0,
        euro: localStorage.getItem('euro') || 0,
        date: 0,
        isSuccess: true,
        isFetching: false,
    };

    GetCurrencyData = () => {
        this.setState({ isFetching: true });
        fetch(
            'http://data.fixer.io/api/latest?access_key=1c66f4d5cb5e0f7ae27733ec8a85bca4'
        )
            .then(response => response.json())
            .then(currencyData => {
                this.setState({
                    euro: getEuro(currencyData),
                    sek: getSek(currencyData),
                    date: getDate(currencyData),
                    isFetching: false,
                });
            })
            .catch(error => {
                this.setState({
                    isSuccess: false,
                    isFetching: false,
                });
            });
    };

    componentWillMount() {
        this.GetCurrencyData();
    }

    render() {
        return (
            <React.Fragment>
                <ExchangeCard
                    euro={this.state.euro}
                    sek={this.state.sek}
                    date={this.state.date}
                    refresh={this.GetCurrencyData}
                    isSuccess={this.state.isSuccess}
                    isFetching={this.state.isFetching}
                />
            </React.Fragment>
        );
    }
}
