import React, { Component } from 'react';

function TimerCard(){
    return (
        <div className="border border-grey p-2">
            <select>
                <option>5</option>
                <option>10</option>
            </select>
            <button>
                start
            </button>
            <button>
                cancel
            </button>
        </div>
    );
}

export default TimerCard;