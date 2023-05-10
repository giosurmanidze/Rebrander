import Typical from "react-typical";
import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";
import { ImLocation, ImPhone } from "react-icons/im";
import { SiMinutemailer } from "react-icons/si";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { IoLogoGoogle } from "react-icons/io";
import { RiArrowDropUpLine } from "react-icons/ri";
import validatePersonal from "../validation/form_validate";
import InputField from "./InputField";
import { useContext } from "react";
import { StoreContext } from "../context/AppContext";

const Footer = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showScroll, setShowScroll] = useState(false);
  const [checkFormEl, setCheckFormEl] = useState({});

  const { sectionContactRef } = useContext(StoreContext);

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  // EVERY TIMES DATA CHANGES VALIDATE FUNCTION  GET STARTED
  useEffect(() => {
    setCheckFormEl(validatePersonal(inputData));
    validatePersonal(inputData);

    console.log(checkFormEl);
  }, [inputData]);

  useEffect(() => {
    setCheckFormEl({});
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheckFormEl(validatePersonal(inputData));
    validatePersonal(inputData);

    //send email
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScrollBtnVisibility = () => {
    setShowScroll(window.pageYOffset > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollBtnVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollBtnVisibility);
    };
  }, []);

  return (
    <>
      <footer
        ref={sectionContactRef}
        className="bg-gray-800 pt-20 text-white py-16 mt-[200px] w-full"
      >
        <div className="container mx-auto w-[80%]">
          <div className="flex justify-center items-center flex-col gap-6">
            <Typical
              className="text-4xl"
              steps={["კონტაქტი", 2000]}
              loop={Infinity}
              wrapper="span"
            />
            <span className="h-[2px] bg-white w-12"></span>
            <Fade left>
              <div className="flex flex-col justify-center items-center max-w-[90%] lg:w-full  text-[#767676] text-[20px] italic text-center">
                <p>არ დაკარგო დრო, დაგვიკავშირდით</p>
                <p>
                  კომპანიისთვის საჭირო ნებისმიერ მოთხოვნებს მოვიყვანთ სისრულეში,
                  უმოკლეს დროში.
                </p>
              </div>
            </Fade>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full justify-items-center pt-16">
            <div className="w-full mb-8 md:mb-0">
              <Fade left>
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="mb-4">
                    <Fade left>
                      <InputField
                        name="name"
                        title="სახელი"
                        value={inputData?.name}
                        handleChange={handleChange}
                        checkFormEl={checkFormEl.name}
                        placeholder="სახელი"
                      />
                    </Fade>
                  </div>
                  <div className="mb-4">
                    <InputField
                      name="email"
                      title="მეილი"
                      value={inputData?.email}
                      handleChange={handleChange}
                      checkFormEl={checkFormEl.email}
                      placeholder="მეილი"
                    />
                  </div>
                  <div className="mb-4">
                    <h3
                      className={`${
                        checkFormEl.message === ""
                          ? "text-red-500"
                          : checkFormEl.message
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      წერილი
                    </h3>
                    <textarea
                      type="text"
                      placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                      name="message"
                      value={inputData?.message}
                      onChange={handleChange}
                      className={`bg-gray-700 ${
                        checkFormEl.message === ""
                          ? "border-2 border-[#ea453a]"
                          : checkFormEl.message
                          ? "border-2 border-green-600"
                          : ""
                      }  rounded-md py-4 px-4 w-full h-36 text-white placeholder-gray-400 focus:outline-none`}
                    />
                    {checkFormEl.message === "" && (
                      <p className="text-[#ea453a] text-sm">
                        ველი სავალდებულოა
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="bg-red-600 py-4 px-6 rounded-md text-white hover:bg-red-700 transition-colors duration-300"
                  >
                    გაგზავნა
                  </button>
                </form>
              </Fade>
            </div>
            <div className="w-full flex  md:justify-start md:mt-5 lg:justify-center lg:mt-0">
              <Fade right>
                <div>
                  <div className="w-full mb-4 md:mb-0">
                    <div className="text-[#767676] text-[18px] flex flex-col">
                      დაგვიკავშირდით სამუშაო საათების განმავლობაში
                      <span className="text-[#ea453a] animate-pulse">
                        ორშაბათი/პარასკევი 10:00-21:00
                      </span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-5 pt-3">
                        <ImLocation className="mt-1 text-[#ea453a] w-8 h-8 animate-bounce" />
                        <div className="flex flex-col gap-1 text-[#767676] text-[18px]">
                          მისამართი:
                          <span className="text-[#ea453a] animate-pulse">
                            თბილისი, ჭავჭავაძის 84
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-5 pt-3">
                        <ImPhone className="mt-1 text-[#ea453a] w-8 h-8 animate-bounce" />
                        <div className="flex flex-col gap-1 text-[#767676] text-[18px]">
                          ტელეფონის ნომერი :
                          <span className="text-[#ea453a] animate-pulse">
                            +995 557 92 62 62
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-5 pt-3">
                        <SiMinutemailer className="mt-1 text-[#ea453a] w-8 h-8 animate-bounce" />
                        <div className="flex flex-col gap-1 text-[#767676] text-[18px]">
                          ელ-ფოსტა:
                          <span className="text-[#ea453a] animate-pulse">
                            example@mail.com
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#2a2a2a] py-6 md:py-8 lg:py-10 xl:py-12 flex justify-center">
        <div className="w-full md:w-11/12 lg:w-10/12 xl:w-8/12 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-gray-500 text-sm">
          <RiArrowDropUpLine
            onClick={handleScroll}
            className="text-[#ea453a] w-9 h-9 cursor-pointer hover:text-white"
          />
          <p className="text-[#767676] text-lg text-center">
            Copyrights © 2022 All Rights Reserved By Rebrander.
          </p>
          <div className="flex gap-4">
            <a className="hover:text-blue-600 cursor-pointer">
              <FiFacebook className="w-7 h-7 " />
            </a>
            <a className="hover:scale-125 hover:text-pink-700 cursor-pointer">
              <FiInstagram className="w-7 h-7" />
            </a>
            <a className="hover:rotate-12 hover:text-red-500 cursor-pointer">
              <IoLogoGoogle className="w-7 h-7" />
            </a>
            <a className="hover:text-blue-400 rounded-full cursor-pointer">
              <FiTwitter className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
