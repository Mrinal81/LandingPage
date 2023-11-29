import React from 'react'




interface LandingProps{}


const LandingPage: React.FC<LandingProps> = () => {
    return (
      <div className="flex items-center justify-center text-center">
        <div className="md:w-9/12 w-full p-8">
          <h1 className="md:text-5xl text-3xl font-bold mb-10 leading-tight">Build your audience and grow your <br /> brand</h1>
          <p className="text-gray-600 text-xl leading-8 mb-10">
            no more, no less. Deploy from our single pane of glass, manage them with easse and scale up as fast as <br /> your workload grows
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Get Started Now
          </button>
          <img
            src="/assets/hero.png"
            alt="Placeholder Image"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    );
  };
  
  export default LandingPage;