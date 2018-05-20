import React, { Component } from 'react';
import TimerIcon from '../icons/basic_anticlockwise.svg';

export const TimerCard = () => {
    let timerStarted = true;
    let timerEnded = false;
    return (
        <div className="border border-grey-light shadow w-2/5 flex">
            <div className="bg-grey-darker p-2">
                <img className="w-8" src={TimerIcon} alt=" " />
            </div>
            <div className="p-2 text-center w-full">
                {timerStarted ? (
                    <React.Fragment>
                        <select
                            className="block m-auto w-full border border-grey-light"
                            name="interval"
                            size="6"
                        >
                            <option className="font-sans font-light" value="5">
                                5 min
                            </option>
                            <option className="font-sans font-light" value="10">
                                10 min
                            </option>
                            <option className="font-sans font-light" value="15">
                                15 min
                            </option>
                            <option className="font-sans font-light" value="20">
                                20 min
                            </option>
                            <option className="font-sans font-light" value="25">
                                25 min
                            </option>
                            <option className="font-sans font-light" value="30">
                                30 min
                            </option>
                        </select>
                        <button className="block w-full my-2 border border-green-light p-4 font-sans font-light hover:bg-green-light hover:text-white">
                            Start
                        </button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p className="text-center text-2xl my-4">
                            <time>00:00:00</time>
                        </p>
                        <button className="block w-full border border-red-dark my-2 p-4 font-sans font-light hover:bg-red-dark hover:text-white">
                            Cancel
                        </button>
                        {timerEnded ? (
                            <React.Fragment>
                                <button className="block w-full border border-yellow-dark my-2 p-4 font-sans font-light hover:bg-yellow-dark hover:text-white">
                                    Reset
                                </button>
                            </React.Fragment>
                        ) : null}
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};
