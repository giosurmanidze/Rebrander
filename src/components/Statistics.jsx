import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";
import StatisticsCard from "./StatisticsCard";

const Statistics = () => {
  return (
    <div className="w-full flex bg-gray-800 min-h-[450px]">
      <div className="w-[90%] py-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto ">
        <StatisticsCard
          icon={<MdOutlineWorkOutline className="w-14 h-14 text-white" />}
          number="47"
          title="დასრულებული პროექტები"
        />
        <StatisticsCard
          icon={<HiOutlineUserGroup className="w-14 h-14 text-white" />}
          number="43"
          title="კმაყოფილი მომხმარებელი"
        />
        <StatisticsCard
          icon={<AiOutlineLike className="w-14 h-14 text-white" />}
          number="330"
          title="მოწონებული პროექტები"
        />
        <StatisticsCard
          icon={<TfiCup className="w-14 h-14 text-white" />}
          number="101"
          title="მომხმარებლის მხარდაჭერა"
        />
      </div>
    </div>
  );
};

export default Statistics;
