import React from 'react';

const Info = ({ data, className }) => {

  const { name, total, saved, status } = data;

  return (
    <div className={className}>
      <h3>{name}</h3>
      <p>${saved} of ${total}</p>
      <p>{status}</p>
    </div>
  );
};

export default Info;