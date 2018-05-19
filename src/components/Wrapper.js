import React, { Component } from 'react';

const Wrapper = ({ children }) => (
    <main className="m-auto flex flex-wrap justify-around p-2 font-sans font-light">
        {' '}
        {children}{' '}
    </main>
);

export default Wrapper;
