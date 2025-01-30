import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Final Tap Logo" className="h-8" />
          </div>

          <div className="text-gray-500 flex flex-col md:flex-row items-center gap-4">
            <Link to="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="underline">
              Terms of Service
            </Link>
            <Link to="/eula" className="underline">
              EULA
            </Link>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
