import React, { useState } from 'react';

const OfferingCard = ({ name, count }) => (
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-gray-900 flex items-center justify-center text-white font-bold">
      X
    </div>
    <div>
      <div className="text-red-500 font-semibold">{name}</div>
      <div className="text-gray-600 text-sm">{count}+</div>
    </div>
  </div>
);

const EducationalOfferings = () => {
  const [activeTab, setActiveTab] = useState('school');

  const competitiveOfferings = [
    { name: 'SSC CHSL', count: 29 },
    { name: 'SSC CGL', count: 15 },
    { name: 'UPSC IAS', count: 8 },
    { name: 'SBI Clerk', count: 5 },
    { name: 'SSC CPO', count: 5 },
    { name: 'SSC MTS', count: 5 },
    { name: 'SBI PO', count: 3 },
  ];

  const schoolOfferings = [
    { name: 'Class 10', count: 10 },
    { name: 'Class 12', count: 12 },
    { name: 'CBSE', count: 15 },
    { name: 'ICSE', count: 8 },
  ];

  const entranceOfferings = [
    { name: 'JEE Main', count: 20 },
    { name: 'NEET', count: 18 },
    { name: 'CLAT', count: 5 },
  ];

  const renderOfferings = () => {
    let offerings;
    switch (activeTab) {
      case 'school':
        offerings = schoolOfferings;
        break;
      case 'entrance':
        offerings = entranceOfferings;
        break;
      default:
        offerings = competitiveOfferings;
    }

    return (
      <div className="grid grid-cols-3 gap-4">
        {offerings.map((offering, index) => (
          <OfferingCard
            key={index}
            name={offering.name}
            count={offering.count}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-1">PROVIDE</h1>
      <h2 className="text-3xl font-bold text-red-500 mb-4">
        BEST EDUCATIONAL
      </h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex mb-4">
          <div
            className={`w-1/4 cursor-pointer ${
              activeTab === 'school' ? 'font-semibold text-red-500' : ''
            }`}
            onClick={() => setActiveTab('school')}
          >
            School
          </div>
          <div
            className={`w-1/4 cursor-pointer ${
              activeTab === 'competitive' ? 'font-semibold text-red-500' : ''
            }`}
            onClick={() => setActiveTab('competitive')}
          >
            Competitive
          </div>
          <div
            className={`w-1/4 cursor-pointer ${
              activeTab === 'entrance' ? 'font-semibold text-red-500' : ''
            }`}
            onClick={() => setActiveTab('entrance')}
          >
            Entrance
          </div>
        </div>
        {renderOfferings()}
      </div>
    </div>
  );
};

export default EducationalOfferings;
