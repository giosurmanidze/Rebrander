import { useContext } from "react";
import { StoreContext } from "../context/AppContext";

const ServiceCard = ({ title, services, year_price, month_price, show }) => {
  const { sectionContactRef, handleLinkClick } = useContext(StoreContext);

  return (
    <div
      ref={sectionContactRef}
      className={`service_card lg2:w-[280px] lg:[250px] flex flex-col h-[500px] bg-[#dcdcdc] transition-all duration-300 hover:bg-[#fff] hover:shadow-lg`}
    >
      <div
        className={`bg-[#333] ${show && 'bg-[#ea453a]'} w-full py-5 text-white flex justify-center items-center`}
      >
        {title}
      </div>
      <div className="flex flex-col w-full bg-[#f8f8f8] ">
        <span className="w-[93%] h-[1px] opacity-30 mt-10 mx-auto bg-[#dcdcdc]"></span>
        {services.map((service, idx) => {
          return (
            <div
              key={idx}
              className="w-full pt-3 flex flex-col justify-center items-center text-[#767676]"
            >
              <p className="text-center">{service}</p>
              <span className="w-[93%] h-[.6px] opacity-30 mt-3 bg-[#dcdcdc]"></span>
            </div>
          );
        })}
        <div className="min-h-[250px] flex flex-col gap-7 justify-center items-center">
          <div className="flex justify-center items-center flex-col">
            <div className="text-[#ea453a] flex items-start">
              <span>₾</span>
              <span className="text-5xl">{year_price}</span>
            </div>
            {!show && <span className="text-[13px]">₾{month_price}/თვეში</span>}
          </div>
          <a
            className={`button-57 ${show && 'selected_card'}`}
            role="button"
            data-section-id="contact"
            onClick={handleLinkClick}
          >
            <span class="text">შეუკვეთე</span>
            <span className="text-white pt-2">შეუკვეთე</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
