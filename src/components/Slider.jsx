import { useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { StoreContext } from "../context/AppContext";
import { data } from "../data.js";
import Typical from "react-typical";

const Carouselvol = () => {
  const { sectionProjectsRef } = useContext(StoreContext);

  function Arrow(props) {
    const { className, style, onClick } = props;

    return (
      <img
        src="../assets/arrow.svg"
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,

        settings: {
          nextArrow: null,
          prevArrow: null,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,

          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto pt-24 w-[95%]" ref={sectionProjectsRef}>
      <div className="flex items-center justify-center w-full">
        <Typical
          className="text-4xl flex justify-center"
          steps={["პროექტები", 2000]}
          loop={Infinity}
          wrapper="span"
        />
        <Link to="/პროექტები" className=" p-[10px] bg-mainRed text-white">
          ნახე ყველა
        </Link>
      </div>
      <Slider {...settings}>
        {data.map((item) => (
          <div className=" outline-none">
            <img src={item.img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Carouselvol;
