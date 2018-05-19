import React, { Component } from 'react';
import CalendarIcon from '../icons/basic_calendar.svg';

export const ClockCard = ({ date }) => {
    return (
        <div className="border border-grey-light shadow w-1/4 text-center flex">
            <div className="bg-red-light p-4 flex">
                <img src={CalendarIcon} alt=" " />
            </div>
            <div className="p-6 w-full">
                <p className="text-xl">
                    <time>
                        {new Intl.DateTimeFormat('en-US', {
                            hour12: false,
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                        }).format(date)}
                    </time>
                </p>
                <p className="mt-4">
                    <time>
                        {new Intl.DateTimeFormat('en-US', {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric',
                        }).format(date)}
                    </time>
                </p>
            </div>
        </div>
    );
};
