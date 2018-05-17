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
			memoText: localStorage.getItem('memotext') || ''
		}
	}

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
						onEdit={() => this.setState({ memo: { editMode: true } })}
						onSave={() => this.setState({ memo:  { editMode: false } })}
            			onCancel={() => this.setState({ memo: { editMode: false } })}
						onUpdate={(memoText) => this.setState({ memo: { memoText } })}
					/>
        		</Container>
			</Wrapper>
		)
	}
}

export default App;