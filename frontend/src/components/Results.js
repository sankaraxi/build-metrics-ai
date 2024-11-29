import React from 'react';
import { useNavigate } from 'react-router-dom';

const Results = () => {
    const navigate = useNavigate();
    const results = JSON.parse(localStorage.getItem('results'));

    if (!results) {
        return (
            <div>
                <p>No results found. Please return to the homepage.</p>
                <button onClick={() => navigate('/')}>Go Back</button>
            </div>
        );
    }

    return (
        <div className="results-container">
            <h2>Estimation Results</h2>
            <ul>
                <li>Tons of Cement: {results.cement}</li>
                <li>Labor Required: {results.labor}</li>
                <li>Number of Bricks: {results.bricks}</li>
                <li>Tons of Iron: {results.iron}</li>
                <li>Tons of Sand: {results.sand}</li>
                <li>Total Cost: {results.cost}</li>
                <li>Days: {results.days}</li>
            </ul>
            <button onClick={() => navigate('/')}>Start Over</button>
        </div>
    );
};

export default Results;
