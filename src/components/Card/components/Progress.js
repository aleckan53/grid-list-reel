import React from 'react';

const Progress = ({ className, percent }) => {

  return (
    <div className={className}>{ percent }</div>
  );
};

export default Progress;