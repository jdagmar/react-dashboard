import React, { Component } from 'react';

function TimerCard() {
    return (
        <div className="border border-grey p-2 w-2/5">
            <select>
                <option>5</option>
                <option>10</option>
            </select>
            <div className="flex justify-around">
                <button className="border border-green-light rounded-sm p-2">
                    Start
                </button>
                <button className="border border-red-light rounded-sm p-2">
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default TimerCard;