import { useEffect, useState } from "react";
import FilterButtons from "../components/FilterButtons";
import { data } from "../data";
import ProjectList from "../components/ProjectList";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("");
  const [projects, setProjects] = useState(data);
  const filterDataByJob = (jobName) => {
    return data.filter((item) => item.job.includes(jobName));
  };

  useEffect(() => {
    if (activeFilter) {
      const filtredPojects = filterDataByJob(activeFilter);
      setProjects(filtredPojects);
    } else {
      setProjects(data);
    }
  }, [activeFilter]);

  return (
    <div>
      <div className="bg-black h-16 w-full flex gap-3 items-center">
        <img
          src="http://rebrander.ge/img/RB%20light.png"
          className="w-16 h-16 pl-3"
        />
        <Link to="/">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform rotate-180 cursor-pointer"
          >
            <path
              d="M14.5148 4.51477L13.6239 5.40567L17.5882 9.37004H0V10.63H17.5882L13.6239 14.5943L14.5148 15.4852L20 9.99996L14.5148 4.51477Z"
              fill="#f14342"
            />
          </svg>
        </Link>
      </div>
      <div className="container mx-auto mt-10">
        <h1 className=" text-center mt-5  font-bold  text-xl "> პროექტები </h1>
        <FilterButtons
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div className="image-container">
          <AnimatePresence>
            <ProjectList projects={projects} />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
