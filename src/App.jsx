import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import StoreContextProvider from "./context/AppContext";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  return (
    <div className="w-full h-screen">
      <StoreContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/პროექტები" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </StoreContextProvider>
    </div>
  );
};

export default App;
