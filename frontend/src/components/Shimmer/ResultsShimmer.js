import React from 'react'

const ResultsShimmer = () => {
  return (
    <div className='py-32'>
        <div className='mx-20 p-5 animate-pulse bg-white bg-opacity-80 text-black rounded-xl'>
            <div className='px-5 w-full'>
                {/* Row 1 */}
                <div className='flex justify-between w-full'>  
                    <div className='flex items-center justify-between w-6/12'>
                        <div className='w-3/6'>
                            <div className='bg-gray-300 animate-pulse w-[200px] h-[200px] rounded-lg'></div>
                        </div>
                        <div className='w-3/6'>
                            <div className='bg-gray-300 animate-pulse w-10 h-2 rounded-md'></div>
                            <div className='bg-gray-300 animate-pulse w-5 h-3 rounded-md'></div>
                        </div>
                    </div>
                    
                    <div className='flex items-center justify-between w-6/12'>
                        <div className='w-3/6'>
                            <div className='bg-gray-300 animate-pulse w-[200px] h-[200px] rounded-lg'></div>
                        </div>
                        <div className='w-3/6'>
                            <div className='bg-gray-300 animate-pulse w-10 h-2 rounded-md'></div>
                            <div className='bg-gray-300 animate-pulse w-5 h-3 rounded-md'></div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className='flex justify-between w-full pt-3'>
                    <div className='flex items-center justify-between w-6/12'>
                        <div className='w-3/6'>
                            <div className='bg-gray-300 animate-pulse w-[200px] h-[200px] rounded-lg'></div>
                        </div>
                        <div className='w-3/6'>
                            <div className='bg-gray-300 animate-pulse w-10 h-2 rounded-md'></div>
                            <div className='bg-gray-300 animate-pulse w-5 h-3 rounded-md'></div>
                        </div>
                    </div>
                    
                    <div className='flex items-center justify-between w-6/12'>
                        <div className='w-3/6'>
                            <div className='bg-gray-300 animate-pulse w-[200px] h-[200px] rounded-lg'></div>
                        </div>
                        <div className='w-3/6'>
                            <div className='bg-gray-300 animate-pulse w-10 h-2 rounded-md'></div>
                            <div className='bg-gray-300 animate-pulse w-5 h-3 rounded-md'></div>
                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                <div className='flex justify-between w-full pt-3'>
                    <div className='flex items-center justify-between w-6/12'>
                        <div className='w-3/6'>
                            <div className='bg-gray-300 animate-pulse w-[200px] h-[200px] rounded-lg'></div>
                        </div>
                        <div className='w-3/6'>
                            <div className='bg-gray-300 animate-pulse w-10 h-2 rounded-md'></div>
                            <div className='bg-gray-300 animate-pulse w-5 h-3 rounded-md'></div>
                        </div>
                    </div>
                    
                    <div className='flex items-center justify-between w-6/12'>
                        <div className='w-3/6'>
                            <div className='bg-gray-300 animate-pulse w-[200px] h-[200px] rounded-lg'></div>
                        </div>
                        <div className='w-3/6'>
                            <div className='bg-gray-300 animate-pulse w-10 h-2 rounded-md'></div>
                            <div className='bg-gray-300 animate-pulse w-5 h-3 rounded-md'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResultsShimmer;
