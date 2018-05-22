import React from 'react';
import HamburgerIcon from '../icons/arrows_hamburger.svg';

export const HamburgerBar = () => {
    return (
        <div className="w-full lg:hidden bg-black">
            <button>
                <img
                    className="w-10 m-2"
                    src={HamburgerIcon}
                    alt="click to open menu"
                />
            </button>
        </div>
    );
};
