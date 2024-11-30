import { useRef } from "react";
import { HOME_BG } from "../utils/constants";
import Features from "./Features";
import Form from "./Form";


const Home = () => {
    const formRef = useRef(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    
    return (
        <div className="">
            <div className="relative">
                <img
                    src={HOME_BG}
                    alt="home-bg"
                    className="w-full h-scrren object-cover mix-blend-plus-lighter  "
                />
            </div>
            <div className='absolute inset-0 top-24 flex flex-col items-center justify-center h-[580px] gap-2'>
                <h1 className='text-6xl'>Welcome to <span className='font-extrabold'>Build Metrics</span></h1>
                <p className='text-2xl'>Your Trusted Partner for Construction Planning</p>
                <button 
                    className='mt-2 bg-gray-400 text-black bg-gradient-to-br from-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-sky-600 cursor-pointer' 
                    onClick={scrollToForm}
                >Get Started
                </button>
            </div>
            <Form formRef={formRef}/>
            <Features />
        </div>
    );
};

export default Home;
