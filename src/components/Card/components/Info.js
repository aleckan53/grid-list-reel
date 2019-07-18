import React from 'react';
import kFormatter from 'utils/kFormatter';

const Info = ({ data, className }) => {

  const { name, total, saved, status } = data;

  return (
    <div className={className}>
      <h3>{name}</h3>
      <p>${kFormatter(saved)} of ${kFormatter(total)}</p>
      <p data-status={status}>{status}</p>
    </div>
  );
};

export default Info;