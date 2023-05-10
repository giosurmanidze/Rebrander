import Typical from "react-typical";
import Fade from "react-reveal/Fade";
import { useContext } from "react";
import { StoreContext } from "../context/AppContext";
import { Link } from "react-router-dom";
const Banner = () => {
  const { sectionMainRef } = useContext(StoreContext);

  return (
    <div
      ref={sectionMainRef}
      className="flex items-center justify-center h-screen relative"
    >
      <div className="text-center absolute flex flex-col justify-center items-center gap-5">
        <img
          className="logo cursor-pointer w-20 h-20"
          onClick={() => navigate("/")}
          src="http://rebrander.ge/img/RB%20light.png"
        />
        <h1 className="text-3xl text-white font-bold flex items-center justify-center h-full z-10">
          <Typical
            steps={["ანდე საქმე პროფესიონალებს", 2000]}
            loop={Infinity}
            wrapper="span"
          />
        </h1>
        <div className="relative pt-8">
          <Fade left>
            <button className="relative z-10  bg-red-700 text-white font-bold rounded transition duration-200 overflow-hidden  xsm:w-[85%] xsm:p-2 xsm:text-md sm:py-4 sm:px-4 sm:text-lg  sm:w-full md:w-full md:px-4 md:py-4">
              <Link
                to="/პროექტები"
                className="inline-block transition-transform transform-gpu"
              >
                განხორციელებული პროექტები
              </Link>
            </button>
          </Fade>
        </div>
      </div>
      <div
        className="relative w-full h-screen overflow-hidden"
        style={{
          backgroundImage: `url("https://www.finestwebstudios.com/assets/images/home-banner.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-5">
        <svg
          className="animate-bounce w-8 h-8 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
