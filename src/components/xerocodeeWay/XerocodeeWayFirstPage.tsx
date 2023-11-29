import React from 'react';
import Link from 'next/link';

interface XerocodeeWayFirstProps{}


const XerocodeeWayFirstPage: React.FC<XerocodeeWayFirstProps> = () => {
    return(
      <div className="first-page flex items-center justify-center mt-20 mb-10">
      <div className="inner-container md:w-9/12 w-full">
        <div className="first-page-header text-center mb-24">
          <h1 className="text-4xl font-bold mb-36 mt-10">The Xerocodee Way</h1>
          <div className="text-center mb-20">
            <div className="number-container relative">
              <h2 className="number text-2xl font-bold mb-2">01</h2>
              <div className="line-with-circles absolute top-0 left-1/2 transform -translate-x-1/2 h-full flex items-center">
                <div className="circle rounded-full w-4 h-4 bg-blue-600 mt-10"></div>
                <div className="line h-full border-b-2 border-blue-500 w-4 mt-4 md:w-16"></div>
                <div className="circle rounded-full w-4 h-4 bg-blue-600 mt-10"></div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Self Serve Infrastructure</h2>
          <p className="text-lg mb-8 text-gray-500">
            Accelerate by self-serving production-ready infrastructure and customize as you scale.
          </p>
        </div>

        <div className="tabs flex items-center mb-8">
          <div className="tab active-tab mr-4 p-1 border-b-4 bg-border-bg rounded-md font-bold">
            Your Cloud
          </div>
          <div className="tab mr-4 border p-1 font-bold">Infra Component</div>
          <div className="tab border p-1 font-bold">Self-Hosted Apps</div>
        </div>

        <div className="content flex flex-col md:flex-row items-center">
          <div className="image-container w-full md:w-1/2 mx-auto mb-4 md:mb-0">
            <img
              src="/assets/cloud.png"
              alt="Your Image"
              className="w-9/12 h-auto rounded-md mx-auto md:mx-0"
            />
          </div>

          <div className="text-container w-9/12 md:w-1/2 mx-auto text-center md:text-left">
            <h2 className="font-bold text-xl py-4">In Your Cloud</h2>
            <p className="text-gray-500 text-md">
              Your infrastructure runs on your AWS or GCP account. Never get locked in. Infinitely
              scalable. Azure support coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default XerocodeeWayFirstPage