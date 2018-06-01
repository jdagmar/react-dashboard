import React from 'react';
import MemoIcon from '../icons/basic_book_pencil.svg';

export const MemoCard = ({
    isEditMode,
    handleMemoEdit,
    memoText,
    handleMemoSave,
    handleMemoCancel,
    handleMemoUpdate,
}) => {
    return (
        <div className="flex w-full lg:w-1/2 lg:m-8 h-48 lg:h-auto shadow bg-white mb-2">
            <div className="bg-yellow-dark p-2">
                <img className="w-8" src={MemoIcon} alt=" " />
            </div>
            <div className="mt-2 p-2 flex flex-col w-full justify-between h-full ">
                {isEditMode ? (
                    <React.Fragment>
                        <textarea
                            className="block border border-grey  w-full font-light font-sans"
                            autoFocus="autofocus"
                            rows="6"
                            value={memoText}
                            onChange={event =>
                                handleMemoUpdate(event.target.value)
                            }
                        />

                        <div className="my-4 ml-auto">
                            <button
                                className="mr-4 font-light font-sans p-2 w-24 rounded-full border border-green hover:bg-green hover:text-white"
                                onClick={handleMemoSave}
                            >
                                Save
                            </button>
                            <button
                                className="font-light font-sans w-24 rounded-full p-2 border border-red hover:bg-red hover:text-white"
                                onClick={handleMemoCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </React.Fragment>
                ) : (
                    <div className="flex justify-between flex-col h-full">
                        <p className="font-light">{memoText}</p>
                        <button
                            className="my-4 w-16 font-light font-sans ml-auto rounded-full p-2 border border-yellow-dark hover:bg-yellow-dark hover:text-white"
                            onClick={handleMemoEdit}
                        >
                            Edit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
