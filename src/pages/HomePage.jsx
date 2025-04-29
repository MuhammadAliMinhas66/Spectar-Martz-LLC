// src/pages/HomePage.jsx
import ContactUs from "../components/ContactUs";
import DealShowcase from "../components/DealShowcase";
import FeaturesGrid from "../components/FeaturesGrid";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import StatisticsSection from "../components/StatisticsSection";
import MapOfCountries from './../components/MapOfCountries';
import Testimonials from './../components/Testimonials';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <StatisticsSection />
      <MapOfCountries />
      <DealShowcase />
      <Testimonials/>
      <ContactUs />
      <Footer/>
    </>
  );
};

export default HomePage;
