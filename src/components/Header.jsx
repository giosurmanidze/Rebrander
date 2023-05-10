import React, { useState, useEffect, useRef, useContext } from "react";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Fade } from "react-reveal";
import { StoreContext } from "../context/AppContext";

let Links = [
  { name: "მთავარი", link: "/", section: "main" },
  { name: "სერვისები", link: "/", section: "services" },
  { name: "ჩვენს შესახებ", link: "/", section: "about_us" },
  { name: "პროექტები", link: "/projects", section: "projects" },
  { name: "მომსახურება", link: "/", section: "service" },
  { name: "კონტაქტი", link: "/", section: "contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { handleLinkClick } = useContext(StoreContext);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div
      className={`${
        (show && "bg-[#333] bg-opacity-50 backdrop-blur-md") ||
        (open && "bg-black bg-opacity-90 backdrop-blur-md")
      } shadow-md w-full fixed top-0 left-0 z-30`}
    >
      <div
        className={`md:flex items-center justify-between py-1 md:px-10 px-7`}
      >
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <Fade left>
            <img
              src="http://rebrander.ge/img/RB%20light.png"
              className="w-16 h-16"
            />
          </Fade>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <Fade right>
            {open ? (
              <IoMdClose className="text-white" />
            ) : (
              <CgMenu className="text-white" />
            )}
          </Fade>
        </div>
        <ul
          className={`md:bg-transparent md:flex md:items-center md:pb-0 pb-12 absolute md:static z-30 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open
              ? "top-20 bg-black bg-opacity-90 backdrop-blur-md"
              : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <>
              {!open && (
                <Fade right>
                  <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                    <a
                      onClick={handleLinkClick}
                      data-section-id={link.section}
                      href={link.link}
                      className="text-[#ffffff] hover:text-gray-400 duration-500"
                    >
                      {link.name}
                    </a>
                  </li>
                </Fade>
              )}
              {open && (
                <Fade top>
                  <li
                    key={link.name}
                    className="md:ml-8 text-xl md:my-0 my-7"
                    onClick={() => setOpen(false)}
                  >
                    <a
                      onClick={handleLinkClick}
                      data-section-id={link.section}
                      href={link.link}
                      className="text-[#ffffff] hover:text-gray-400 duration-500"
                    >
                      {link.name}
                    </a>
                  </li>
                </Fade>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
