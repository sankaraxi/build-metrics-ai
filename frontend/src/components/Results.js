import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Images
import CEMENT from '../assets/cement.png';
import BRICKS from '../assets/bricks.png';
import IRON from '../assets/iron.webp';
import SAND from '../assets/sand.jpg';
import LABOR from '../assets/labor.png';
import COST from '../assets/ruppee.png';
import RESULTS_IMG from '../assets/results_img.png';

const Results = () => {
    const navigate = useNavigate();
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchedResults = JSON.parse(localStorage.getItem('results'));

        if (fetchedResults) {
            setResults(fetchedResults);    
        }

        setLoading(false);  
    }, []);

    if (loading) {
        return (
            <div>loading ...</div>
        )
    }
    

    if (!results) {
        return (
            <div>
                <p>No results found. Please return to the homepage.</p>
                <button onClick={() => navigate('/')}>Go Back</button>
            </div>
        );
    }

    return (
        <div className="mx-20 px-2 py-44 bg-white text-black">
            <h2>Estimation Results</h2>
            <div>
                <div>
                    <img 
                        src={RESULTS_IMG}
                        alt='bricks-img'
                        className='w-64 h-64'
                    />
                </div>
                <div>

                </div>
            </div>
            <div>
                <img 
                    src={CEMENT}
                    alt='cement-img'
                    className='w-64 h-64'
                />
            </div>
            <div>
                <img 
                    src={IRON}
                    alt='cement-img'
                    className='w-64 h-64'
                />
            </div>

            <div>
                <img 
                    src={LABOR}
                    alt='cement-img'
                    className='w-64 h-64'
                />
            </div>

            <div>
                <img 
                    src={BRICKS}
                    alt='cement-img'
                    className='w-64 h-64'
                />
            </div>
            <div>
                <img 
                    src={SAND}
                    alt='cement-img'
                    className='w-64 h-64'
                />
            </div>
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
