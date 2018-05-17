import React, { Component } from 'react';

function MemoCard(){
    return (
        <div className="border border-grey p-2">
            <textarea className="block" rows="4" cols="50"></textarea>
            <button>Save</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}

export default MemoCard;