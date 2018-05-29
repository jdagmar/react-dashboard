import React from 'react';
import SaveIcon from '../icons/basic_floppydisk.svg';
import EditIcon from '../icons/software_pencil.svg';
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
        <div className="flex w-full lg:w-2/5 h-48 lg:h-auto shadow bg-white mb-2">
            <div className="bg-yellow-dark p-2">
                <img className="w-8" src={MemoIcon} alt=" " />
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
                                className="mr-4 font-light font-sans text-white p-2 w-24 rounded-full bg-green hover:bg-green-dark"
                                onClick={onSave}
                            >
                                Save
                            </button>
                            <button
                                className="font-light font-sans text-white bg-red-light w-24 rounded-full p-2 hover:bg-red-dark"
                                onClick={onCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </React.Fragment>
                ) : (
                    <div className="flex justify-between flex-col h-full">
                        <p className="font-light">{memoText}</p>
                        <button
                            className="my-4 text-white w-16 font-light font-sans ml-auto rounded-full p-2 bg-yellow-dark hover:bg-yellow-darker"
                            onClick={onEdit}
                        >
                            Edit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
