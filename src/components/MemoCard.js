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
            <textarea
                className="block border border-grey m-2 m-auto w-full"
                onFocus={onEdit}
                value={memoText}
                onChange={event => onUpdate(event.target.value)}
            />

            <div className="flex justify-around mt-2">
                {editMode ? (
                    <div className="ml-auto">
                        <button className="mr-4" onClick={onSave}>
                            Save
                            <img
                                className="w-4 ml-2"
                                role="img"
                                src={SaveIcon}
                                alt=" "
                            />
                        </button>
                        <button onClick={onCancel}>
                            Cancel
                            <img
                                className="w-4 ml-2"
                                role="img"
                                src={CancelIcon}
                                alt=" "
                            />
                        </button>
                    </div>
                ) : null}
            </div>
        </div>
    );
};
