import React from 'react';
import ArrowLeft from '../icons/arrows_left.svg';
import ArrowRight from '../icons/arrows_right.svg';

export const TabBar = ({ toggleView }) => {
    return (
        <nav className="lg:hidden w-full flex m-auto">
            <div className="flex justify-around w-full">
                <button onClick={toggleView}>
                    <img className="w-10" src={ArrowLeft} />
                </button>
                <button onClick={toggleView}>
                    <img className="w-10" src={ArrowRight} />
                </button>
            </div>
        </nav>
    );
};
