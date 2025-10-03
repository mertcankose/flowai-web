import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen text-gray-900" style={{ backgroundColor: "#FFF8ED" }}>
      <HeroSection />
      <FeaturesSection id="features" />
      <Footer />
    </div>
  );
};

export default Home;
