import React, { Component } from 'react';
import EuroIcon from '../icons/ecommerce_euro.svg';
import RefreshIcon from '../icons/arrows_rotate.svg';

function ExchangeCard() {
    return (
        <div className="border border-grey p-2">
            <p>10 sek</p>
            <p>1 euro <img src={EuroIcon}/></p>
            <button>
                Refresh
            <img src={RefreshIcon} />
            </button>
        </div>
    );
}

export default ExchangeCard;