import React from 'react';

export const Container = ({ children }) => (
    <div className="w-full flex flex-col lg:flex-row justify-around mt-2">
        {children}
    </div>
);
