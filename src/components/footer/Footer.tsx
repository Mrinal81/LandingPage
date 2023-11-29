import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer flex flex-wrap items-center justify-center mt-20 bg-footer-bg mb-20 text-gray-600">
      <div className="inner-footer w-full md:w-9/12 mb-10 p-4">
        <div className="footer-content flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="paragraph w-full md:w-5/12 mb-8 md:mb-0">
            <div className="footer-para mt-20">
              <p className="text-center md:text-left">
                You get just what you need to run your cloud workloads-no more, no less. Deploy from our single pane of glass,
                manage them with ease and scale up as fast as your workload grows
              </p>
            </div>
            <div className="paraFrame-links flex mt-10 gap-6 justify-center md:justify-start">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="w-10 h-10 rounded-full bg-blue-600"></div>
              ))}
            </div>
          </div>
          <div className="our-links w-1/2 md:w-2/12 mb-8 md:mb-0">
            <div className="footer-heading pb-2 md:pb-10 mt-5">
              <h1 className="font-bold text-xl text-black text-center md:text-left">Our Links</h1>
            </div>
            <div className="our-link">
              <ul className="leading-10 text-center md:text-left">
                <li>Home</li>
                <li>About Us</li>
                <li className="text-blue-700">Integrations</li>
                <li>Team</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="our-services w-1/2 md:w-5/12 mb-8 md:mb-0">
            <div className="footer-heading pb-2 md:pb-10 mt-5">
              <h1 className="font-bold text-xl text-black text-center md:text-left">Our Services</h1>
            </div>
            <div className="our-link">
              <ul className="leading-10 text-center md:text-left">
                <li>Infrastructure provisioning</li>
                <li>Network infrastructure automation</li>
                <li>Cost optimization</li>
                <li>Cloud migration</li>
                <li>Kubernetes at scale</li>
              </ul>
            </div>
          </div>
          <div className="others-links w-full md:w-2/12 mb-8 md:mb-0">
            <div className="footer-heading pb-2 md:pb-10 mt-5">
              <h1 className="font-bold text-xl text-black text-center md:text-left">Others Links</h1>
            </div>
            <div className="our-link">
              <ul className="leading-10 text-center md:text-left">
                <li>FAQ</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lower-content flex items-center flex-col md:flex-row mt-20">
          <div className="w-full md:w-1/2 flex justify-center text-center md:text-left mb-2 md:mb-0">
            <ul className="flex gap-2 md:justify-center">
              <li>Terms & Condition |</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 md:text-right">
            <ul className="flex gap-2 md:justify-center">
              <li className='ll'>Copyright @ 2023 <span className="font-bold">EXCODE TECHNOLOGIES</span></li>
              <li>| All rights reserved</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
