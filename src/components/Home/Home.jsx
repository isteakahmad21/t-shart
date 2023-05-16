import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShart = useLoaderData()
    console.log();
    return (
        <div>
            <h2>Tshart Qu: {tShart.length}</h2>
            <h3>Home</h3>
        </div>
    );
};

export default Home;