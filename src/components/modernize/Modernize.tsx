import React from 'react';

interface ModernizeProps {}

const data = [
  {
    title: 'Real-Time Risk Monitoring',
    para:
      'Real-time risk monitoring across your infrastructure and application ecosystem will help you maintain ongoing compliance with more than 05+ different regulatory standards.',
    img: '/assets/real-time.png',
  },
  {
    title: 'Collaborative Workflows',
    para:
      'Share artefacts easily and collaborate with team members, auditors, and pen testers via automated procedures. To manage daily compliance with automatic notifications and reminders, create, assign, and track tasks.',
    img: '/assets/collaboration.png',
  },
];

const Modernize: React.FC<ModernizeProps> = () => {
  return (
    <div className="modernize-contents flex items-center justify-center">
      <div className="modernize flex flex-col items-center justify-center bg-modernize-bg text-white rounded-3xl md:w-9/12 w-11/12 gap-6">
        <div className="text-center flex items-center justify-center w-full">
          <h1 className="md:text-4xl text-2xl font-bold mb-4 mt-10 leading-tight md:w-4/5">
            Modernize Apps, Infrastructure With Cloud Native Tech for Resilience, Scalability
          </h1>
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`modernize-content flex justify-center items-center flex-col md:flex-row mt-10 mb-10 w-4/5 gap-4 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="first-modernize w-full md:w-1/2 flex justify-center">
              <img src={item.img} alt={item.title} className="first-img w-full h-full rounded-xl" />
            </div>
            <div className="real-time-content w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p>{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modernize;
