import React, { Component } from 'react';
import EuroIcon from '../icons/ecommerce_euro.svg';
import RefreshIcon from '../icons/arrows_rotate.svg';
import ArrowsIcon from '../icons/arrows_switch_horizontal.svg';
import CurrencyIcon from '../icons/ecommerce_banknotes.svg';

export const ExchangeCard = () => {
    return (
        <div className="border border-grey-light shadow w-1/4 flex">
            <div className="bg-green flex p-4">
                <img src={CurrencyIcon} />
            </div>
            <div className="flex flex-col justify-between p-4 w-full">
                <div className="flex justify-center text-lg my-2">
                    <p>10 sek</p>
                    <img
                        className="w-4 self-center mx-4"
                        src={ArrowsIcon}
                        alt=""
                    />
                    <p>1 euro</p>
                </div>
                <p className="text-sm text-center">
                    Updated: <time>09:09:1990</time>
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
