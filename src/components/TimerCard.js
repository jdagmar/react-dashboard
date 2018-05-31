import React from 'react';
import TimerIcon from '../icons/basic_anticlockwise.svg';

const FormatedInterval = ({ interval }) => {
    const minutes = Math.floor(interval / 60);
    const seconds = interval - minutes * 60;
    const finishedClasses = 'bg-red-light rounded text-white p-2';

    return (
        <p
            className={`text-center text-2xl my-4 ${
                interval === 0 ? finishedClasses : ''
            }`}
        >
            <time>{`0${minutes}:${seconds < 10 ? 0 : ''}${seconds}`}</time>
        </p>
    );
};

export const TimerCard = ({
    timerStarted,
    startTimer,
    cancelTimer,
    getOptionValue,
    interval,
    resetTimer,
}) => {
    return (
        <div className="shadow w-full lg:w-1/2 lg:m-8 h-48 flex bg-white mb-2">
            <div className="bg-indigo-darker p-2">
                <img className="w-8" src={TimerIcon} alt=" " />
            </div>
            <div className="p-2 flex flex-col justify-between text-center w-full">
                {timerStarted ? (
                    <React.Fragment>
                        <FormatedInterval interval={interval} />

                        <div className="flex justify-around">
                            <button
                                onClick={cancelTimer}
                                className="w-24 rounded-full my-2 p-2 font-sans font-light border border-red-light hover:text-white hover:bg-red-light"
                            >
                                <span>Cancel</span>
                            </button>
                            {interval <= 0 ? (
                                <React.Fragment>
                                    <button
                                        onClick={resetTimer}
                                        className="w-24 rounded-full my-2 p-2 font-sans font-light border border-yellow-dark hover:text-white hover:bg-yellow-dark"
                                    >
                                        Reset
                                    </button>
                                </React.Fragment>
                            ) : null}
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <label htmlFor="intervals" hidden>
                            Choose interval
                        </label>
                        <select
                            id="intervals"
                            onChange={getOptionValue}
                            className="block m-auto w-full border border-grey-light"
                            name="interval"
                            size="5"
                        >
                            <option className="font-sans font-light" value={60}>
                                1 min
                            </option>
                            <option
                                className="font-sans font-light"
                                value={60 * 2}
                            >
                                2 min
                            </option>
                            <option
                                className="font-sans font-light"
                                value={60 * 3}
                            >
                                3 min
                            </option>
                            <option
                                className="font-sans font-light"
                                value={60 * 4}
                            >
                                4 min
                            </option>
                            <option
                                className="font-sans font-light"
                                value={60 * 5}
                            >
                                5 min
                            </option>
                        </select>
                        <button
                            onClick={startTimer}
                            className="m-auto w-16 rounded-full my-2 p-2 font-sans font-light border border-green hover:text-white hover:bg-green"
                        >
                            Start
                        </button>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};
