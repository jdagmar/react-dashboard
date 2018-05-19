import React, { Component } from 'react';
import EuroIcon from '../icons/ecommerce_euro.svg';
import RefreshIcon from '../icons/arrows_rotate.svg';

function ExchangeCard() {
    return (
        <div className="border border-grey p-2 w-1/4">
            <p>10 sek</p>
            <p>
                1 euro <img className="w-4" role="img" src={EuroIcon} alt=" " />
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
    );
}

export default ExchangeCard;
