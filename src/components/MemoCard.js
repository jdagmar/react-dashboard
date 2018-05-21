import React, { Component } from 'react';
import SaveIcon from '../icons/basic_floppydisk.svg';
import EditIcon from '../icons/software_pencil.svg';
import DeleteIcon from '../icons/basic_trashcan.svg';
import CancelIcon from '../icons/arrows_remove.svg';
import MemoIcon from '../icons/basic_book_pencil.svg';

export const MemoCard = ({
    editMode,
    onEdit,
    memoText,
    onSave,
    onCancel,
    onUpdate,
}) => {
    return (
        <div className="flex w-2/5 shadow bg-white">
            <div className="bg-yellow-dark p-2">
                <img className="w-8" src={MemoIcon} />
            </div>
            <div className="mt-2 p-2 flex flex-col w-full justify-between h-full ">
                {editMode ? (
                    <React.Fragment>
                        <textarea
                            className="block border border-grey  w-full font-light font-sans"
                            autoFocus="autofocus"
                            rows="6"
                            value={memoText}
                            onChange={event => onUpdate(event.target.value)}
                        />

                        <div className="my-4 ml-auto">
                            <button
                                className="mr-4 font-light font-sans"
                                onClick={onSave}
                            >
                                Save
                                <img
                                    className="w-4 ml-2"
                                    src={SaveIcon}
                                    alt=" "
                                />
                            </button>
                            <button
                                className="font-light font-sans"
                                onClick={onCancel}
                            >
                                Cancel
                                <img
                                    className="w-4 ml-2 align-middle"
                                    src={CancelIcon}
                                    alt=" "
                                />
                            </button>
                        </div>
                    </React.Fragment>
                ) : (
                    <div className="flex justify-between flex-col h-full">
                        <p className="font-light">{memoText}</p>
                        <button
                            className="my-4 font-light font-sans ml-auto"
                            onClick={onEdit}
                        >
                            Edit
                            <img className="w-4 ml-2" src={EditIcon} alt=" " />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
