import React, { Component } from 'react';
import SaveIcon from '../icons/basic_floppydisk.svg';
import EditIcon from '../icons/software_pencil.svg';
import DeleteIcon from '../icons/basic_trashcan.svg'

function MemoCard(){
    return (
        <div className="border border-grey p-2">
            <textarea className="block" rows="4" cols="50"></textarea>
            <button>
                Save
                <img src={SaveIcon}/>
            </button>
            <button>
                Edit
                <img src={EditIcon} />
            </button>
            <button>
                Delete
                <img src={DeleteIcon} />
            </button>
        </div>
    );
}

export default MemoCard;