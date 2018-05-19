import React, { Component } from 'react';
import SaveIcon from '../icons/basic_floppydisk.svg';
import EditIcon from '../icons/software_pencil.svg';
import DeleteIcon from '../icons/basic_trashcan.svg';
import CancelIcon from '../icons/arrows_remove.svg';

export const MemoCard = ({
    editMode,
    onEdit,
    memoText,
    onSave,
    onCancel,
    onUpdate,
}) => {
    return (
        <div className="border border-grey p-2 w-2/5">
            <div className="mt-2">
                {editMode ? (
                    <React.Fragment>
                        <textarea
                            className="block border border-grey m-2 m-auto w-full font-light font-sans"
                            autoFocus="autofocus"
                            value={memoText}
                            onChange={event => onUpdate(event.target.value)}
                        />

                        <div className="mt-4">
                            <button
                                className="mr-4 font-light font-sans"
                                onClick={onSave}
                            >
                                Save
                                <img
                                    className="w-4 ml-2"
                                    role="img"
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
                                    role="img"
                                    src={CancelIcon}
                                    alt=" "
                                />
                            </button>
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <p className="font-light">{memoText}</p>
                        <button
                            className="mt-4 font-light font-sans"
                            onClick={onEdit}
                        >
                            Edit
                            <img
                                className="w-4 ml-2"
                                role="img"
                                src={EditIcon}
                                alt=" "
                            />
                        </button>
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};
