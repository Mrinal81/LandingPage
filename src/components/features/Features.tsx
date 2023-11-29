import React from 'react';

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  return (
    <div className="features-page flex items-center justify-center text-center relative mb-20 ">
      <div className=" mx-auto p-8 md:w-9/12 relative">
        <div className="features border w-32 mx-auto bg-blue-300 rounded-full mb-4">
          <h4 className="text-lg text-blue-600 p-4 mx-auto">Features</h4>
        </div>
        <h1 className="md:text-4xl text-3xl font-bold mb-4 mt-10 leading-tight">
          <span className="text-blue-600">Save 1000s</span> of expensive coder hours
        </h1>
        <p className="text-gray-600 text-xl leading-8 mb-6">
          with cloud-native technologies, we assist in modernizing infrastructure and applications for resilience and scalability
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mb-6 mt-8">
          Get Started Now
        </button>
        <div className="max-w-screen-lg flex items-center justify-center relative">
          <img
            src="/assets/dashboard-2.png"
            alt="dashboard 2 img"
            className="absolute md:w-80 md:h-52 md:top-72 md:left-10 w-32 top-32 left-0"
          />
         

          <img
            src="/assets/dashboard-1.png"
            alt="Placeholder Image"
            className="md:w-8/12 md:h-3/4 w-9/12 rounded-md mb-4"
          />
          
          
          <img
            src="/assets/dashboard-3.png"
            alt="dashboard 2 img"
            className="absolute md:w-80 md:h-52 md:top-0 md:right-0 w-32 top-0 right-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
