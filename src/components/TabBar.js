import React from 'react';
import ArrowLeft from '../icons/arrows_left.svg';
import ArrowRight from '../icons/arrows_right.svg';

export const TabBar = ({ toggleView, currentPage }) => {
    const isLeftDisabled = currentPage === 'first';
    const disabledStyling = 'opacity-50';

    return (
        <nav className="lg:hidden w-full flex m-auto">
            <div className="flex justify-around w-full">
                <button
                    onClick={toggleView}
                    disabled={isLeftDisabled && 'disabled'}
                    className={isLeftDisabled && disabledStyling}
                >
                    <img
                        className="w-10"
                        src={ArrowLeft}
                        alt="click to see more content"
                    />
                </button>
                <button
                    onClick={toggleView}
                    disabled={!isLeftDisabled && 'disabled'}
                    className={!isLeftDisabled && disabledStyling}
                >
                    <img
                        className="w-10"
                        src={ArrowRight}
                        alt="click to see more content"
                    />
                </button>
            </div>
        </nav>
    );
};
