import React from 'react';
import ArrowLeft from '../icons/arrows_left.svg';
import ArrowRight from '../icons/arrows_right.svg';

export const TabBar = () => {
    return (
        <nav className="lg:hidden w-full flex m-auto">
            <div className="flex justify-around w-full">
                <div className="cursor-pointer">
                    <img className="w-10" src={ArrowLeft} />
                </div>
                <div className="cursor-pointer">
                    <img className="w-10" src={ArrowRight} />
                </div>
            </div>
        </nav>
    );
};
