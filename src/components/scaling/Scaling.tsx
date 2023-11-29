import React from 'react';

interface ScalingProps {}

const data = [
  {
    title: 'Infrastructure',
    description: 'Automated cloud infrastructure workflow',
    img: '/assets/infrastructure.png',
  },
  {
    title: 'Security',
    description: 'Modern secure infrastructure approach',
    img: '/assets/cyber-security.png',
  },
  {
    title: 'Networking',
    description: 'Flexible secure Application connectivity',
    img: '/assets/neural-network.png',
  },
  {
    title: 'Applications',
    description: 'Automated Application deployment for Agility',
    img: '/assets/development.png',
  },
];

const Scaling: React.FC<ScalingProps> = () => {
  return (
    <div className="scaling flex items-center justify-center mb-10 mt-10">
      <div className="content-serve">
        <div className="heading text-center">
          <h1 className="md:text-4xl text-3xl font-bold mb-4 mt-10 leading-tight">
            Self serve infrastructure platform for{' '} <br />
            <span className="text-blue-600">Scaling teams</span>
          </h1>
        </div>
        <div className="service flex flex-wrap justify-center items-center mt-10">
          <div className="serve-left mb-10 flex justify-center items-center">
            <div className="service-details p-6 md:w-9/12 flex flex-wrap items-center justify-around m-4">
              {data.map((item, index) => (
                <div key={index} className="serve-item flex flex-wrap gap-4 w-full md:w-5/12 items-center shadow-lg rounded-xl p-4 mb-10">
                  <div className="serve-img p-4 bg-white rounded-xl shadow-lg">
                    <img src={item.img} alt="img" className="w-10 h-10" />
                  </div>
                  <div className="serve-content">
                    <h1 className='font-bold text-lg'>{item.title}</h1>
                    <p className='text-sm'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scaling;
