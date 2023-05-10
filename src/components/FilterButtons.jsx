import { useState } from "react";

const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  const filters = ["ყველა", "ლოგო", "ვებ-დიზაინი", "ბრენდირება", "ვიდეო"];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {filters.map((filter) => (
        <button
          id="button-2"
          onClick={() => setActiveFilter(filter == "ყველა" ? "" : filter)}
          className={`${
            (!activeFilter && filter == "ყველა") || activeFilter == filter
              ? "text-mainRed  border-b-2 border-mainRed transition duration-500 ease-in-out hover:border-mainRed"
              : ""
          } p-2  bg-mainGray `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
export default FilterButtons;
