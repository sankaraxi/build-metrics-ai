import Form from "./Form";


const Home = () => {
    
    

    return (
        <div className="mx-20 px-2">
            <div>
                <img
                    src=""
                    alt=""
                />
            </div>
            <div className='flex flex-col items-center justify-center h-[580px] gap-2'>
                <h1 className='text-6xl'>Welcome to <span className='font-extrabold'>Build Metrics</span></h1>
                <p className='text-2xl'>Your Trusted Partner for Construction Planning</p>
                <button 
                    className='mt-2 bg-gray-400 text-black bg-gradient-to-br from-white text-lg font-semibold py-2 px-4 rounded-lg hover:bg-sky-600 cursor-pointer' 
                    onclick="scrollToSection('features')"
                >Get Started
                </button>
            </div>
            <Form />

            
        </div>
    );
};

export default Home;
