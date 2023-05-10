import React from "react";
import CountUp from "react-countup";
import Fade from "react-reveal/Fade";

const StatisticsCard = ({ icon, number, title }) => {
  return (
    <div className="p-4 flex flex-col items-center gap-3 justify-center h-auto">
      <Fade left>
        {icon}
        <CountUp
          start={0}
          end={number}
          duration={4.5}
          separator=","
          className="text-5xl text-white"
        />
        <span className="text-white text-2xl text-center">{title}</span>
      </Fade>
    </div>
  );
};

export default StatisticsCard;
