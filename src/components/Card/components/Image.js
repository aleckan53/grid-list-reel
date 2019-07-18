import React from 'react';

const Image = ({ img, className }) => {
  
  const styles = {
    backgroundImage: `url(${img})`,
  };
  
  return <div className={className} style={styles}/>;
};

export default Image;