import React from 'react';

export const Wrapper = ({ children }) => (
    <main className="m-auto flex flex-wrap font-sans font-light bg-grey-lightest h-screen lg:h-auto">
        {children}
    </main>
);
