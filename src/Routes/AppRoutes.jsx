import { Routes, Route } from "react-router-dom";
import Proxies from "../pages/Proxies";
import UKVPS from "../pages/UKVPS";
import USAVPS from "../pages/USAVPS";
import Prices from "../pages/Prices";
import AboutUs from "../pages/AboutUs";
import GetStarted from "../pages/GetStarted";
import HomePage from "../pages/HomePage";
import VPS from "../pages/VPS"; // Add this import

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/proxies" element={<Proxies />} />
      <Route path="/vps" element={<VPS />} /> {/* New VPS route */}
      <Route path="/uk-vps" element={<UKVPS />} />
      <Route path="/usa-vps" element={<USAVPS />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>
  );
};

export default AppRoutes;
