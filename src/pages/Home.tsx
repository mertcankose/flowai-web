import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Navbar />
      <HeroSection />
      <FeaturesSection id="features" />
      <Footer />
    </div>
  );
};

export default Home;
