import React from 'react';
import RefreshIcon from '../icons/arrows_rotate.svg';
import ArrowsIcon from '../icons/arrows_switch_horizontal.svg';
import CurrencyIcon from '../icons/ecommerce_banknotes.svg';
import SadIcon from '../icons/basic_elaboration_message_sad.svg';

export const ExchangeCard = ({
    sek,
    euro,
    date,
    refresh,
    isSuccess,
    rotateIcon,
}) => {
    const rotationClass = 'rotate-animate';
    return (
        <div className="shadow w-full lg:w-1/4 flex bg-white m-auto mb-2 lg:h-full">
            <div className="bg-green flex p-4">
                <img src={CurrencyIcon} alt=" " />
            </div>
            <div
                className={`flex ${
                    isSuccess ? 'flex-col' : 'flex-row'
                } justify-between p-4 w-full`}
            >
                {isSuccess ? (
                    <React.Fragment>
                        <div className="flex lg:justify-between m-auto">
                            <p className="whitespace-no-wrap">
                                {Number.parseFloat(sek).toFixed(2)}{' '}
                                <span className="text-xs">SEK</span>
                            </p>
                            <img
                                className="w-4 self-center mx-2"
                                src={ArrowsIcon}
                                alt=""
                            />
                            <p className="whitespace-no-wrap">
                                {Number.parseFloat(euro).toFixed(2)}{' '}
                                <span className="text-xs">EUR</span>
                            </p>
                        </div>
                        <div className="text-xs text-center mt-2 leading-normal">
                            <p>Last updated at</p>
                            <time>
                                {new Intl.DateTimeFormat('en-US', {
                                    hour12: false,
                                    month: 'short',
                                    day: '2-digit',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                }).format(date)}
                            </time>
                        </div>
                        <div className="ml-auto mt-4">
                            <button
                                onClick={refresh}
                                className="font-light font-sans text-sm"
                            >
                                Check for updates
                                <img
                                    className={`w-4 ml-2 align-text-top ${
                                        rotateIcon ? rotationClass : ''
                                    }`}
                                    src={RefreshIcon}
                                    alt=" "
                                />
                            </button>
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p className="leading-tight">
                            Exchange rates not available at the moment
                        </p>
                        <img className="w-8 h-8" src={SadIcon} alt=" " />
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};
