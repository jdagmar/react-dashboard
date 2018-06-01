import React from 'react';
import ArrowLeft from '../icons/arrows_left.svg';
import ArrowRight from '../icons/arrows_right.svg';

export const TabBar = ({ handleViewToggle, currentPage }) => {
    const isLeftDisabled = currentPage === 'first';
    const disabledClasses = 'opacity-50 cursor-not-allowed';

    return (
        <nav className="lg:hidden w-full flex m-auto">
            <div className="flex justify-around w-full">
                {/* if there is no more content to see to the 'left' disable button */}
                <button
                    onClick={handleViewToggle}
                    disabled={isLeftDisabled && 'disabled'}
                    className={isLeftDisabled && disabledClasses}
                >
                    <img
                        className="w-10"
                        src={ArrowLeft}
                        alt="click to see more content"
                    />
                </button>
                {/* if there is no more content to the 'right' disabled button */}
                <button
                    onClick={handleViewToggle}
                    disabled={!isLeftDisabled && 'disabled'}
                    className={!isLeftDisabled && disabledClasses}
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
