import Features from "./Features";

const About = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center px-8 py-16 pt-32">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-8">
          About <span className="text-blue-500">Build Metrics</span>
        </h1>
  
        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-4xl">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to <strong>Build Metrics</strong> – your trusted partner for
            smarter, faster, and data-driven construction planning. Our mission is to
            revolutionize the way construction cost estimation is done, blending
            technology and precision to make your dream projects a reality.
          </p>
        </div>
  
        {/* Vision Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We envision a future where construction planning is seamless, efficient, 
            and accessible to everyone. By leveraging advanced technologies, we aim to 
            make cost estimation a hassle-free experience that empowers homeowners, 
            contractors, and project managers alike.
          </p>
        </div>
  
        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-3 max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Build Metrics?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>
              <strong>AI-Powered Accuracy:</strong> Our platform uses advanced algorithms 
              to analyze your input and provide precise cost estimations.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Clean and intuitive interface for 
              an effortless user experience.
            </li>
            <li>
              <strong>Efficient Planning:</strong> Save time and resources with detailed 
              insights and estimates.
            </li>
            <li>
              <strong>Data-Driven Solutions:</strong> Get reliable results to make informed 
              decisions.
            </li>
          </ul>
        </div>
        <div className="pb-12 px-20">
            <h2 class="text-2xl font-bold text-black text-center my-8">Why Choose Build Metrics?</h2>
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
        <div className="w-full flex items-center justify-between px-32">
            {/* How It Works Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 max-w-4xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">How It Works</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-lg">
                    <li>
                    Enter the details of your project, such as square footage and number of floors.
                    </li>
                    <li>
                    Our AI-driven system analyzes your inputs and generates a detailed cost estimation.
                    </li>
                    <li>
                    Use this data to plan your project confidently and effectively.
                    </li>
                </ol>
            </div>
             {/* Contact Section */}
            <div className="bg-white rounded-lg shadow-lg p-10 mb-8 max-w-4xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-gray-700 text-lg">
                    Got questions? We’d love to hear from you!
                </p>
                <p className="text-gray-700 text-lg">
                    📧 <strong>Email:</strong> support@buildmetrics.com
                </p>
                <p className="text-gray-700 text-lg">
                    🌐 <strong>Website:</strong> <a href="https://www.buildmetrics.com" className="text-blue-500 underline">www.buildmetrics.com</a>
                </p>
                {/* <p className="text-gray-700 text-lg">
                    📞 <strong>Phone:</strong> +1 (123) 456-7890
                </p> */}
            </div>

        </div>
        
  
       
      </div>
    );
  };
  
  export default About;
  