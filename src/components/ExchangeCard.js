import React, { Component } from 'react';
import EuroIcon from '../icons/ecommerce_euro.svg';
import RefreshIcon from '../icons/arrows_rotate.svg';
import ArrowsIcon from '../icons/arrows_switch_horizontal.svg';
import CurrencyIcon from '../icons/ecommerce_banknotes.svg';

export const ExchangeCard = ({ sek, euro, timestamp }) => {
    return (
        <div className="shadow w-1/4 flex bg-white">
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
                <p className="text-sm text-center">
                    Updated: <time>{timestamp}</time>
                </p>
                <div className="ml-auto mt-4">
                    <button className="font-light font-sans">
                        Refresh
                        <img
                            className="w-4 ml-2 align-text-top"
                            role="img"
                            src={RefreshIcon}
                            alt=" "
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
