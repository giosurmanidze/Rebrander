import React, { useState, useEffect } from 'react';

const LinearProgressBar = ({ percentage, name }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (width < percentage) {
        setWidth((prevWidth) => prevWidth + 1);
      }
    }, 15);

    return () => clearInterval(intervalId);
  }, [percentage, width]);

  return (
    <div className='mb-[15px]'>
      <div className='flex justify-between mb-[10px] '>
        <div>{name}</div>
        <div>{width}%</div>
      </div>
      <div className='relative h-[5px]  bg-gray-300 '>
        <div className='absolute top-0 left-0 h-[5px]  bg-mainRed' style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};

export default LinearProgressBar;