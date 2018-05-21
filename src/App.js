import React, { Component } from 'react';
import { Wrapper } from './components/Wrapper';
import { Sidebar } from './components/Sidebar';
import { Container } from './components/Container';
import { ExchangeCard } from './components/ExchangeCard';
import { GetCurrency } from './components/GetCurrency';
import { TimerCard } from './components/TimerCard';
import { ClockCard } from './components/ClockCard';
import { MemoCard } from './components/MemoCard';
import { WeatherCard } from './components/WeatherCard';
import { GetWeather } from './components/GetWeather';

class App extends Component {
    state = {
        memo: {
            editMode: false,
            memoText: localStorage.getItem('memotext') || '',
        },
        clock: {
            date: new Date(),
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

    componentDidMount() {
        setInterval(() => {
            this.setState({ clock: { date: new Date() } });
        }, 1000);
    }

    render() {
        return (
            <Wrapper>
                <Sidebar />
                <div className="flex flex-wrap flex-col w-5/6 mt-4">
                    <div className="flex w-full justify-around">
                        <GetCurrency />
                        <ClockCard date={this.state.clock.date} />
                        <GetWeather />
                    </div>
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
                </div>
            </Wrapper>
        );
    }
}

export default App;
