import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="flex justify-center items-center p-4">
        {/* <img className="w-10 h-10 mr-4" src={icon} alt="Feature Icon" /> */}
        <div>
          <div className="font-bold text-xl">{title}</div>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
