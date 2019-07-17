import React from 'react';
import { useProgress } from 'hooks';

const Progress = ({ className, percent, status }) => {

  const circleProgress = useProgress(percent)

  return (
    <div className={className}>
      <span>{ percent }</span>
      <svg viewBox="0 0 100 100">
        <circle
          data-circle='bottom'
          strokeWidth="7"
          fill="transparent"
          cx="50%" cy="50%" r="45"/>
        <circle
          data-circle='top'
          {...circleProgress}
          id={`circle`}
          data-status={status}
          strokeWidth="7"
          fill="transparent"
          cx="50%" cy="50%" r="45"/>
      </svg>
    </div>
  );
};

export default Progress;