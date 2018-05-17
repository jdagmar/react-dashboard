import React, { Component } from 'react';
import SaveIcon from '../icons/basic_floppydisk.svg';
import EditIcon from '../icons/software_pencil.svg';
import DeleteIcon from '../icons/basic_trashcan.svg'

function MemoCard() {
    return (
        <div className="border border-grey p-2 w-2/5">
            <textarea className="block border border-grey m-2 m-auto w-full"></textarea>
            <div className="flex justify-around mt-2">
                <button>
                    <span>Save</span>
                    <img className="w-4 ml-2" role="img" src={SaveIcon} alt=" "/>
                </button>
                <button>
                    Edit
                <img className="w-4 ml-2" role="img" src={EditIcon} alt=" "/>
                </button>
                <button>
                    Delete
                <img className="w-4 ml-2" role="img" src={DeleteIcon} alt=" "/>
                </button>
            </div>
        </div>
    );
}

export default MemoCard;