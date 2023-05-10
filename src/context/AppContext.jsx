import React, { useRef, createContext } from "react";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const sectionMainRef = useRef(null);
  const sectionServicesRef = useRef(null);
  const sectionAbout_usRef = useRef(null);
  const sectionServiceRef = useRef(null);
  const sectionContactRef = useRef(null);
  const sectionProjectsRef = useRef(null);

  const handleLinkClick = (event) => {
    event.preventDefault();
    const sectionId = event.target.dataset.sectionId;
    const sectionRef = getSectionRefById(sectionId);
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const getSectionRefById = (sectionId) => {
    switch (sectionId) {
      case "main":
        return sectionMainRef;
      case "services":
        return sectionServicesRef;
      case "about_us":
        return sectionAbout_usRef;
      case "service":
        return sectionServiceRef;
      case "contact":
        return sectionContactRef;
      case "projects":
        return sectionProjectsRef;
      default:
        return null;
    }
  };


  return (
    <StoreContext.Provider
      value={{
        sectionMainRef,
        sectionServicesRef,
        sectionAbout_usRef,
        sectionServiceRef,
        sectionContactRef,
        handleLinkClick,
        getSectionRefById,
        sectionProjectsRef,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
