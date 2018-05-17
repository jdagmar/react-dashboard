import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Container from './components/Container';
import ExchangeCard from './components/ExchangeCard';
import TimerCard from './components/TimerCard';
import ClockCard from './components/ClockCard';
import MemoCard from './components/MemoCard';
import WeatherCard from './components/WeatherCard';
import { GetWeather } from './components/GetWeather';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <ExchangeCard />
        <ClockCard />
        <GetWeather />
        <Container>
          <TimerCard />
          <MemoCard />
        </Container>
      </Wrapper>
    )
  }
}

export default App;
