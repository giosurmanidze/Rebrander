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
          <button className="relative z-10 bg-red-700 text-white font-bold py-4 px-4 rounded transition duration-200 overflow-hidden">
  <Link to="/პროექტები" className="inline-block transition-transform transform-gpu text-xl">
    განხორციელებული პროექტები
  </Link>
  <svg
    className="inline-block w-5 h-5 ml-1 fill-current transition-all duration-200 transform-gpu rotate-0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M17.6 11.4l-6 6c-.2.2-.4.3-.6.3s-.4-.1-.6-.3l-6-6C4.1 11 4 10.7 4 10.4s.1-.6.3-.8l.7-.7c.2-.2.5-.3.8-.3s.6.1.8.3L12 15.6l5.6-5.6c.2-.2.5-.3.8-.3s.6.1.8.3l.7.7c.2.2.3.5.3.8s-.1.6-.3.8z" />
  </svg>
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
