import { useState, useEffect } from 'react';

const useProgress = (percent) => {
  const [offset, setOffset] = useState(null);
  
  useEffect(() => {
    const circle = document.querySelector(`#circle`) || {r: {baseVal: {value: 100}}}
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    const offset = circumference - percent / 100 * circumference;
    setOffset(offset)

  }, [percent])

  return {
    style: {
      strokeDashoffset: offset || 0,
    }
  }
};

export default useProgress;