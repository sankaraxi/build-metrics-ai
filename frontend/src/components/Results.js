import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

//Images
import CEMENT from '../assets/cement.png';
import BRICKS from '../assets/bricks.png';
import IRON from '../assets/iron.webp';
import SAND from '../assets/sand.jpg';
import LABOR from '../assets/labor.png';
import COST from '../assets/ruppee.png';
import RESULTS_IMG from '../assets/results_img.png';
import SQFT from '../assets/sqft.png';
import FLOORS from '../assets/floors.png';
import DAYS from '../assets/days.png';

const Results = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);

    const {name, sqft, floors} = location.state || {};

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
            <h2>Here is your estimation report <span>{name}</span></h2>
            <div className='w-full'>
                {/*Row 1*/}
                <div className='flex justify-between w-full'>  
                    <div className='flex items-center justify-center w-6/12'>
                        <div className='w-2/6'>
                            <img
                                src={SQFT}
                                alt='sqft-img'
                                className='w-[200px] h-[200px]'
                            />
                        </div>
                        
                        <div >
                            <h1 className='text-3xl'>Number of Square Feet</h1>
                            <p className='text-6xl'>{sqft} sqft.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center w-6/12'>
                        <img
                            src={FLOORS}
                            alt='floors-img'
                            className='w-64 h-64'
                        />
                        <div>
                            <h1>Number of Floors</h1>
                            <p>{floors}</p>
                        </div>
                    </div>
                </div>

                {/*Row 2*/}
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <img
                            src={CEMENT}
                            alt='sqft-img'
                            className='w-64 h-64'
                        />
                        <div>
                            <h1>Tons of Cement</h1>
                            <p>{results.cement}</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img
                            src={SAND}
                            alt='floors-img'
                            className='w-64 h-64'
                        />
                        <div>
                            <h1>Tons of Sand</h1>
                            <p>{results.sand}</p>
                        </div>
                    </div>
                </div>

                {/*Row 3*/}
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <img
                            src={LABOR}
                            alt='floors-img'
                            className='w-64 h-64'
                        />
                        <div>
                            <h1>Labor Required</h1>
                            <p>{results.labor}</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img
                            src={IRON}
                            alt='sqft-img'
                            className='w-64 h-64'
                        />
                        <div>
                            <h1>Tons of Iron</h1>
                            <p>{results.iron}</p>
                        </div>
                    </div>
                    
                </div>
                
                {/*Row 4*/}
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <img
                            src={BRICKS}
                            alt='floors-img'
                            className='w-64 h-64'
                        />
                        <div>
                            <h1>Number of Bricks</h1>
                            <p>{results.bricks}</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img
                            src={DAYS}
                            alt='days-img'
                            className='w-64 h-64'
                        />
                        <div>
                            <h1>Days</h1>
                            <p>{results.days}</p>
                        </div>
                    </div>
                </div>
            </div>

            <ul>
                <li>Labor Required: {results.labor}</li>
                <li>Number of Bricks: {results.bricks}</li>
                <li>Tons of Iron: {results.iron}</li>
                <li>Total Cost: {results.cost}</li>
                <li>Days: {results.days}</li>
            </ul>
            <button onClick={() => navigate('/')}>Start Over</button>
        </div>
    );
};

export default Results;
