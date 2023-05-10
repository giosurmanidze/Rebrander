import ServiceCard from "./ServiceCard";
import Flip from "react-reveal/Flip";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";
import { useContext } from "react";
import { StoreContext } from "../context/AppContext";

const Services = () => {
  const { sectionServicesRef } = useContext(StoreContext);

  return (
    <div
      ref={sectionServicesRef}
      className="pt-20 flex w-[90%] flex-col justify-center items-center gap-6 mx-auto mt-[120px]"
    >
      <div className="flex justify-center items-center flex-col gap-6">
        <Typical
          className="text-3xl"
          steps={["სერვისის ფასები", 500]}
          loop={Infinity}
          wrapper="span"
        />
        <span className="h-[2px] bg-black w-12"></span>
        <Fade left>
          <div className="flex flex-col justify-center items-center max-w-[90%] lg:w-full  text-[#767676] text-[18px] italic text-center">
            <p>
              ჩვენ გთავაზობთ ბიზნეს მომსახურების პაკეტებს, რომელიც დაეხმარება
              თქვენს ბიზნესს განვითარებასა და წინსვლაში.
            </p>
            <p>
              მოქმედებს ბიზნესზე სრულად მორგებული შეთავაზებებიც რომელიც
              ინდივიდუალურად განიხილება.
            </p>
          </div>
        </Fade>
      </div>
      <div className="sm:w-[90%] py-16 grid sm:grid-cols-1 sm:gap-y-[150px] md:grid-cols-2 md:gap-y-[100px] md:justify-between lg:grid-cols-4 gap-4 mx-auto">
        <Flip left>
          <ServiceCard
            title="ზოგადი"
            year_price="975"
            services={[
              "1 ვებ საიტი",
              "პერსონალური მეილი",
              "სოციალური გვერდი",
              "სავიზიტო ბარათის დიზაინი",
            ]}
            month_price="49"
          />
        </Flip>
        <Flip left>
          <ServiceCard
            title="სტანდარტული"
            year_price="1460"
            services={[
              "ლოგოს დიზაინი",
              "1 მრავალგვერდიანი ვებ საიტი",
              "პერსონალური მეილი",
              "სოციალური გვერდი + რეკლამირება",
              "სავიზიტო ბარათი და ბანერები",
            ]}
            month_price="130"
          />
        </Flip>
        <Flip left>
          <ServiceCard
            title="პროფესიონალური"
            year_price="2236"
            services={[
              "ლოგოს დიზაინი",
              "2 მრავალგვერდიანი ვებ საიტი",
              "ვებ მეილის მენეჯმეტი",
              "სოციალური გვერდი + რეკლამირება",
              "სავიზიტო ბარათი და ბანერები",
              "სარეკლამო ვიდეო რგოლი",
            ]}
            month_price="203"
          />
        </Flip>
        <Flip left>
          <ServiceCard
            title="სტატუსი"
            year_price="278"
            services={[
              "ლოგოს დიზაინი",
              "ბრენდირება",
              "ვებ საიტი + გვერდის მენეჯმეტი",
              "სრული ვებ-მეილის ფუნქციონალი",
              "სრული სოციალური მენეჯმენტი",
              "სარეკლამო მასალის დიზაინი +ბეჭდვა",
              "სარეკლამო ვიდეო რგოლი",
            ]}
            show="false"
          />
        </Flip>
      </div>
    </div>
  );
};

export default Services;
