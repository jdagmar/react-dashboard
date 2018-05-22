import React from 'react';
import RefreshIcon from '../icons/arrows_rotate.svg';
import ArrowsIcon from '../icons/arrows_switch_horizontal.svg';
import CurrencyIcon from '../icons/ecommerce_banknotes.svg';

export const ExchangeCard = ({ sek, euro, date, refresh }) => {
    return (
        <div className="shadow w-full lg:w-1/4 flex bg-white m-auto mb-2">
            <div className="bg-green flex p-4">
                <img src={CurrencyIcon} alt=" " />
            </div>
            <div className="flex flex-col justify-between p-4 w-full">
                <div className="flex justify-center text-l my-2">
                    <p>{Math.round(sek)} SEK</p>
                    <img
                        className="w-4 self-center mx-4"
                        src={ArrowsIcon}
                        alt=""
                    />
                    <p>{euro} EUR</p>
                </div>
                <p className="text-xs text-center">
                    Updated:{' '}
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
                </p>
                <div className="ml-auto mt-4">
                    <button
                        onClick={refresh}
                        className="font-light font-sans text-sm"
                    >
                        Refresh
                        <img
                            className="w-4 ml-2 align-text-top"
                            src={RefreshIcon}
                            alt=" "
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
