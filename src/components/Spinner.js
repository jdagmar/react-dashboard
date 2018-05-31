import React from 'react';
import SpinnerIcon from '../icons/arrows_clockwise_dashed.svg';

export const Spinner = () => {
    return (
        <div>
            <img
                className="rotate-animate"
                src={SpinnerIcon}
                alt="content is loading"
            />
        </div>
    );
};
