import Navbar from "../components/Navbar";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary/5 to-white text-gray-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection id="features" />
      <Footer />
    </div>
  );
};

export default Home;
