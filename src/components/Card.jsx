import React from 'react'
const Card = ({ title, description }) => {
  return (
    <div className="border p-4 text-center bg-red-300">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
