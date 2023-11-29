import React from 'react';

interface XerocodeeProps {}

const Xerocodee: React.FC<XerocodeeProps> = () => {
  return (
    <div className="xerocodee flex items-center justify-center text-center mt-24">
      <div className="xerocodee-img flex flex-wrap items-center justify-center text-center md:w-9/12 w-full">
       <div className="left w-full md:w-1/2 p-2">
        <h1 className='font-bold text-2xl mb-16 mt-10'>Without Xerocodee</h1>
        <img src="/assets/without.png" alt="without-xerocodee"/>
       </div>
       <div className="right w-full md:w-1/2 p-2 mt-10">
        <h1 className="font-bold text-2xl mb-16">With Xerocodee</h1>
        <img src="/assets/with.png" alt="with-xerocodee" />
       </div>
      </div>
    </div>
  );
}

export default Xerocodee;
