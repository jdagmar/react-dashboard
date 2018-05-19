import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Container from './components/Container';
import ExchangeCard from './components/ExchangeCard';
import TimerCard from './components/TimerCard';
import ClockCard from './components/ClockCard';
import { MemoCard } from './components/MemoCard';
import WeatherCard from './components/WeatherCard';
import { GetWeather } from './components/GetWeather';

class App extends Component {
    state = {
        memo: {
            editMode: false,
            memoText: localStorage.getItem('memotext') || '',
        },
    };

    handleMemoSave = () => {
        localStorage.setItem('memotext', this.state.memo.memoText);
        this.handleMemoCancel();
    };

    handleMemoEdit = () => {
        this.setState({ memo: { ...this.state.memo, editMode: true } });
    };

    handleMemoCancel = () => {
        this.setState({ memo: { ...this.state.memo, editMode: false } });
    };

    handleMemoUpdate = memoText => {
        this.setState({ memo: { ...this.state.memo, memoText } });
    };

    render() {
        return (
            <Wrapper>
                <ExchangeCard />
                <ClockCard />
                <GetWeather />
                <Container>
                    <TimerCard />
                    <MemoCard
                        editMode={this.state.memo.editMode}
                        memoText={this.state.memo.memoText}
                        onEdit={this.handleMemoEdit}
                        onSave={this.handleMemoSave}
                        onCancel={this.handleMemoCancel}
                        onUpdate={this.handleMemoUpdate}
                    />
                </Container>
            </Wrapper>
        );
    }
}

export default App;
