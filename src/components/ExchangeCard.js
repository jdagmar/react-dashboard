import React, { Component } from 'react';
import EuroIcon from '../icons/ecommerce_euro.svg';
import RefreshIcon from '../icons/arrows_rotate.svg';
import ArrowsIcon from '../icons/arrows_switch_horizontal.svg';

export const ExchangeCard = () => {
    return (
        <div className="border border-grey-light shadow p-4 w-1/4 flex flex-col justify-between">
            <div className="flex justify-center text-lg my-2">
                <p>10 sek</p>
                <img className="w-4 self-center mx-4" src={ArrowsIcon} alt="" />
                <p>1 euro</p>
            </div>
            <div className="flex justify-between">
                <p className="text-sm self-end">
                    Updated: <time>09:09:1990</time>
                </p>
                <button className="font-light font-sans">
                    Refresh
                    <img
                        className="w-4 ml-2"
                        role="img"
                        src={RefreshIcon}
                        alt=" "
                    />
                </button>
            </div>
        </div>
    );
};
