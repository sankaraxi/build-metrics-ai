import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CountUp from 'react-countup';

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
import { HOME_BG } from '../utils/constants';

const Results = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);

    const {name, sqft, floors} = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
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
        <div className="">
            <div className="fixed -z-40">
                <img
                    src={HOME_BG}
                    alt="home-bg"
                    className="w-full h-scrren object-cover mix-blend-plus-lighter  "
                />
            </div>
            <div className='py-32'>
                <div className='mx-20 p-5 bg-white bg-opacity-80 text-black rounded-xl'>
                    <h1 className='text-center font-extrabold text-5xl'>Build Metrics <span className='text-blue-600'>Estimation</span></h1>
                    <h2 className='text-center text-4xl pb-3'>Hello, <span className='font-bold'>{name}</span>! Here is your construction estimation report.</h2>
                    <div className='px-5 w-full'>
                        {/*Row 1*/}
                        <div className='flex justify-between w-full'>  
                            <div className='flex items-center justify-between w-6/12'>
                                <div className='w-3/6'>
                                    <img
                                        src={SQFT}
                                        alt='sqft-img'
                                        className='w-[200px] h-[200px]'
                                    />
                                </div>
                                
                                <div className='w-3/6'>
                                    <h1 className='text-3xl'>Number of Square Feet</h1>
                                    <p className=''>
                                        <CountUp end={sqft} duration={4} delay={1} className="text-4xl xl:text-6xl font-extrabold"/>
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between w-6/12'>
                                

                                <div className='w-3/6'>
                                    <img
                                        src={FLOORS}
                                        alt='floors-img'
                                        className='w-[225px] h-[225px]'
                                    />
                                </div>
                                <div className='w-3/6'>
                                    <h1 className='text-3xl'>Number of Floors</h1>
                                    <p className=''>
                                        <CountUp end={floors} duration={2} delay={1} className="text-4xl xl:text-6xl font-extrabold"/>
                                    </p>
                                </div>
                                
                                
                            </div>
                        </div>

                        {/*Row 2*/}
                        <div className='flex justify-between w-full pt-3'>
                            <div className='flex items-center justify-between w-6/12'>
                                <div className='w-3/6'>
                                    <img
                                        src={CEMENT}
                                        alt='sqft-img'
                                        className='w-64 h-64'
                                    />
                                </div>
                                
                                <div className='w-3/6'>
                                    <h1 className='text-3xl'>Tons of Cement</h1>
                                    <p className=''>
                                        <CountUp end={results.cement} duration={2} delay={1} className="text-4xl xl:text-6xl font-extrabold"/>
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between w-6/12'>
                            
                            
                                <div className='w-3/6'>
                                    <img
                                        src={LABOR}
                                        alt='floors-img'
                                        className='w-64 h-64'
                                    />
                                </div>
                                <div className='w-3/6'>
                                    <h1 className='text-3xl'>Labor Required</h1>
                                    <p className=''>
                                        <CountUp end={results.labor} duration={2} delay={1} className="text-4xl xl:text-6xl font-extrabold"/>
                                    </p>
                                </div>
                            
                                
                            </div>
                        </div>

                        {/*Row 3*/}
                        <div className='flex justify-between w-full pt-3'>
                            <div className='flex items-center justify-between w-6/12'>
                                <div className='w-3/6'>
                                    <img
                                        src={SAND}
                                        alt='floors-img'
                                        className='w-[225px] h-[225px] rounded-full'
                                    />
                                </div>
                                
                                <div className='w-3/6'>
                                    <h1 className='text-3xl'>Tons of Sand</h1>
                                    <p className=''>
                                        <CountUp end={results.sand} duration={2} delay={1} className="text-4xl xl:text-6xl font-extrabold"/>
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between w-6/12'>
                                <div className='w-3/6'>
                                    <img
                                        src={IRON}
                                        alt='iron-img'
                                        className='w-[225px] h-[225px] rounded-full'
                                    />
                                </div>
                                
                                <div className='w-3/6'>
                                    <h1 className='text-3xl'>Tons of Iron</h1>
                                    <p className=''>
                                        <CountUp end={results.iron} duration={2} delay={1} className="text-4xl xl:text-6xl font-extrabold"/>
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        
                        {/*Row 4*/}
                        <div className='flex justify-between w-full pt-3'>
                        <div className='flex items-center justify-between w-6/12'>
                                <div className='w-3/6'>
                                    <img
                                        src={BRICKS}
                                        alt='floors-img'
                                        className='w-[225px] h-[225px]'
                                    />
                                </div>
                                
                                <div className='w-3/6'>
                                    <h1 className='text-3xl'>Number of Bricks</h1>
                                    <p className=''>
                                        <CountUp end={results.bricks} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between w-6/12'>
                                <div className='w-3/6'>
                                    <img
                                        src={DAYS}
                                        alt='floors-img'
                                        className='w-[225px] h-[225px]'
                                    />
                                </div>
                                
                                <div className='w-3/6'>
                                    <h1 className='text-3xl'>Days Needed</h1>
                                    <p className=''>
                                        <CountUp end={results.days} duration={2} delay={1} className="text-4xl xl:text-6xl font-extrabold"/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center w-full'>
                        <div className='flex items-center justify-between w-6/12'>
                                <div className='w-3/6'>
                                    <img
                                        src={COST}
                                        alt='cost-img'
                                        className='w-[225px] h-[225px] rounded-full'
                                    />
                                </div>
                                
                                <div className='w-3/6'>
                                    <h1 className='text-3xl'>Total Estimated Cost</h1>
                                    <p className=''>
                                    <span className='text-4xl xl:text-6xl font-bold'>₹</span> <CountUp end={results.cost} duration={2} delay={1} className="text-4xl xl:text-6xl font-extrabold"/>
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className='flex items-center justify-center'>
                            <button
                                className='mt-2 bg-gray-400 text-black bg-gradient-to-br from-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-sky-600 cursor-pointer'
                                onClick={() => navigate('/')}
                            >New Estimate</button>
                    </div>
                </div>

            </div>
            
            
        </div>
    );
};

export default Results;
