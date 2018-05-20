import React, { Component } from 'react';

export const Wrapper = ({ children }) => (
    <main className="m-auto flex flex-wrap justify-around p-2 font-sans font-light max-w-2xl">
        {children}
    </main>
);
