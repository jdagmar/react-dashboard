import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import ExchangeCard from './components/ExchangeCard';
import TimerCard from './components/TimerCard';
import ClockCard from './components/ClockCard';
import MemoCard from './components/MemoCard';
import WeatherCard from './components/WeatherCard';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <ExchangeCard />
        <TimerCard />
        <ClockCard />
        <MemoCard />
        <WeatherCard />
      </Wrapper>
    )
  }
}

export default App;
