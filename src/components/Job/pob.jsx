import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Rob = () => {
    const hi = useLoaderData();
    console.log(hi);
    return (
        <div>
            <h1>This is pop</h1>
        </div>
    );
};

export default Rob;