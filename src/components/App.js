import React, { Component } from 'react';
import Hammer from 'react-hammerjs';
import { Wrapper } from './Wrapper';
import { Sidebar } from './Sidebar';
import { GetExchangeRates } from './GetExchangeRates';
import { TimerCard } from './TimerCard';
import { ClockCard } from './ClockCard';
import { MemoCard } from './MemoCard';
import { GetWeather } from './GetWeather';
import { HamburgerBar } from './HamburgerBar';
import { TabBar } from './TabBar';

class App extends Component {
    state = {
        isMobile: false,
        memo: {
            isEditMode: false,
            memoText: localStorage.getItem('memotext') || 'note to self...',
        },
        clock: {
            date: new Date(),
        },
        timer: {
            isTimerStarted: false,
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

    // handles page control in mobileview
    handleViewToggle = () => {
        const currentPage = this.state.tabBar.currentPage;
        const secondPage = currentPage === 'first' ? 'second' : 'first';
        this.setState({
            tabBar: { ...this.state.tabBar, currentPage: secondPage },
        });
    };

    // handle toggling of hamburger menu
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
                isTimerStarted: true,
                counter,
            },
        });
    };

    handleTimerCancel = () => {
        this.setState({
            timer: { ...this.state.timer, isTimerStarted: false, interval: 0 },
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
        this.setState({ memo: { ...this.state.memo, isEditMode: true } });
    };

    handleMemoCancel = () => {
        this.setState({ memo: { ...this.state.memo, isEditMode: false } });
    };

    handleMemoUpdate = memoText => {
        this.setState({ memo: { ...this.state.memo, memoText } });
    };

    // if desktop force the sidebar to always show
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
            <div className="w-full flex flex-col lg:flex-row justify-around lg:max-w-2xl lg:p-3">
                <TimerCard
                    isTimerStarted={this.state.timer.isTimerStarted}
                    handleTimerReset={this.handleTimerReset}
                    handleTimerStart={this.handleTimerStart}
                    handleTimerCancel={this.handleTimerCancel}
                    handleSelectedOption={this.handleSelectedOption}
                    interval={this.state.timer.interval}
                />
                <MemoCard
                    isEditMode={this.state.memo.isEditMode}
                    memoText={this.state.memo.memoText}
                    handleMemoEdit={this.handleMemoEdit}
                    handleMemoSave={this.handleMemoSave}
                    handleMemoCancel={this.handleMemoCancel}
                    handleMemoUpdate={this.handleMemoUpdate}
                />
            </div>
        );

        return (
            <Wrapper>
                <HamburgerBar toggleMenu={this.handleMenuToggle} />
                {this.state.mobileMenu.isOpen && <Sidebar />}

                {/* all content inside hammer can be handled via swipe */}
                <Hammer onSwipe={this.handleViewToggle}>
                    <div className="flex flex-wrap flex-col w-5/6 lg:mt-8 mx-auto">
                        {!this.state.isMobile ? (
                            // if desktop view show all cards
                            <React.Fragment>
                                {pageOne}
                                {pageTwo}
                            </React.Fragment>
                        ) : // if mobile use page control to navigate between pages
                        this.state.tabBar.currentPage === 'first' ? (
                            pageOne
                        ) : this.state.tabBar.currentPage === 'second' ? (
                            pageTwo
                        ) : null}
                    </div>
                </Hammer>

                {/* page control nav */}
                <TabBar
                    handleViewToggle={this.handleViewToggle}
                    currentPage={this.state.tabBar.currentPage}
                />
            </Wrapper>
        );
    }
}

export default App;
