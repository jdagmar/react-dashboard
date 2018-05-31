import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import { Wrapper } from './components/Wrapper';
import { Sidebar } from './components/Sidebar';
import { Container } from './components/Container';
import { GetExchangeRates } from './components/GetExchangeRates';
import { TimerCard } from './components/TimerCard';
import { ClockCard } from './components/ClockCard';
import { MemoCard } from './components/MemoCard';
import { GetWeather } from './components/GetWeather';
import { HamburgerBar } from './components/HamburgerBar';
import { TabBar } from './components/TabBar';

class App extends Component {
    state = {
        isMobile: false,
        memo: {
            editMode: false,
            memoText: localStorage.getItem('memotext') || '',
        },
        clock: {
            date: new Date(),
        },
        timer: {
            timerStarted: false,
            timerEnded: false,
            interval: 0,
            startInterval: 60,
            counter: '',
        },
        mobileMenu: {
            isOpen: true,
        },
        tabBar: {
            currentPage: 'first',
        },
    };

    handleViewToggle = () => {
        const currentPage = this.state.tabBar.currentPage;
        const secondPage = currentPage === 'first' ? 'second' : 'first';
        this.setState({
            tabBar: { ...this.state.tabBar, currentPage: secondPage },
        });
    };

    handleMenuToggle = () => {
        const currentState = this.state.mobileMenu.isOpen;
        const isOpen = !currentState;
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        this.setState({
            mobileMenu: { ...this.state.mobileMenu, isOpen },
        });
    };

    handleSelectedOption = event => {
        this.setState({
            timer: { ...this.state.timer, startInterval: event.target.value },
        });
    };

    handleTimerStart = () => {
        const counter = setInterval(() => {
            this.setState({
                timer: {
                    ...this.state.timer,
                    interval: this.state.timer.interval - 1,
                },
            });

            if (this.state.timer.interval === 0) {
                clearInterval(this.state.timer.counter);
            }
        }, 1000);

        this.setState({
            timer: {
                ...this.state.timer,
                interval: this.state.timer.startInterval,
                timerStarted: true,
                counter,
            },
        });
    };

    handleTimerCancel = () => {
        this.setState({
            timer: { ...this.state.timer, timerStarted: false, interval: 0 },
        });

        clearInterval(this.state.timer.counter);
    };

    handleTimerReset = () => {
        this.handleTimerStart();
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

    handleWindowSize = () => {
        const isMobile = window.innerWidth <= 992;

        this.setState({
            isMobile,
            mobileMenu: { ...this.state.mobileMenu, isOpen: !isMobile },
        });
    };

    componentWillMount() {
        this.handleWindowSize();
        window.addEventListener('resize', this.handleWindowSize);
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ clock: { date: new Date() } });
        }, 1000);
    }

    render() {
        const pageOne = (
            <div className="flex flex-wrap w-full justify-around lg:h-32">
                <GetExchangeRates />
                <ClockCard date={this.state.clock.date} />
                <GetWeather />
            </div>
        );

        const pageTwo = (
            <div className="w-full flex flex-col lg:flex-row justify-around mt-4 lg:max-w-2xl m-auto lg:p-3">
                <TimerCard
                    timerStarted={this.state.timer.timerStarted}
                    resetTimer={this.handleTimerReset}
                    startTimer={this.handleTimerStart}
                    cancelTimer={this.handleTimerCancel}
                    getOptionValue={this.handleSelectedOption}
                    interval={this.state.timer.interval}
                />
                <MemoCard
                    editMode={this.state.memo.editMode}
                    memoText={this.state.memo.memoText}
                    onEdit={this.handleMemoEdit}
                    onSave={this.handleMemoSave}
                    onCancel={this.handleMemoCancel}
                    onUpdate={this.handleMemoUpdate}
                />
            </div>
        );

        return (
            <Wrapper>
                <HamburgerBar toggleMenu={this.handleMenuToggle} />
                {this.state.mobileMenu.isOpen && <Sidebar />}

                <Hammer onSwipe={this.handleViewToggle}>
                    <div className="flex flex-wrap flex-col w-5/6 lg:mt-8 m-auto">
                        {!this.state.isMobile ? (
                            <React.Fragment>
                                {pageOne}
                                {pageTwo}
                            </React.Fragment>
                        ) : this.state.tabBar.currentPage === 'first' ? (
                            pageOne
                        ) : this.state.tabBar.currentPage === 'second' ? (
                            pageTwo
                        ) : null}
                    </div>
                </Hammer>

                <TabBar
                    toggleView={this.handleViewToggle}
                    currentPage={this.state.tabBar.currentPage}
                />
            </Wrapper>
        );
    }
}

export default App;
