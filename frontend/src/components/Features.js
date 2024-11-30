import React from 'react'

const Features = () => {
  return (
    <div className='mx-10 pt-48 pb-10'>
        <h2 class="text-2xl font-bold text-center my-8">Why Choose Build Metrics?</h2>
        <div class="features grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
        <div class="feature bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 class="text-lg font-semibold text-blue-600 mb-2">Accurate Material Estimates</h3>
            <p class="text-gray-600">
            Calculate exact quantities of cement, sand, bricks, and more with cutting-edge algorithms.
            </p>
        </div>
        <div class="feature bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 class="text-lg font-semibold text-blue-600 mb-2">Budget Planning</h3>
            <p class="text-gray-600">
            Get detailed cost projections for your construction projects to stay within budget.
            </p>
        </div>
        <div class="feature bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 class="text-lg font-semibold text-blue-600 mb-2">Time Optimization</h3>
            <p class="text-gray-600">
            Plan effectively with our precise predictions for project timelines and labor requirements.
            </p>
        </div>
    </div>

    </div>
  )
}

export default Features