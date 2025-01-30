import { Apple, Menu, PlaySquare, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { appStore, playStore } from "@/constants/url";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-primary/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 -mb-2">
          <img src={logo} alt="Flow AI Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-primary flex items-center gap-2"
          >
            <Link to="/support" className="flex items-center gap-2">
              Support
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-primary flex items-center gap-2"
          >
            <a
              href={playStore}
              className="flex items-center gap-2"
              target="_blank"
            >
              <PlaySquare size={18} />
              Play Store
            </a>
          </Button>
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-primary flex items-center gap-2"
          >
            <a
              href={appStore}
              className="flex items-center gap-2"
              target="_blank"
            >
              <Apple size={18} />
              App Store
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="md:hidden text-gray-700 hover:text-primary transition-colors z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          absolute top-16 left-0 w-full bg-white border-b border-primary/10
          transform transition-all duration-300 ease-in-out md:hidden
          ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }
        `}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col items-start gap-4">
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-primary flex items-center gap-2"
          >
            <Link to="/support" className="flex items-center gap-2">
              Support
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-primary flex items-center gap-2"
          >
            <a
              href={playStore}
              className="flex items-center gap-2"
              target="_blank"
            >
              <PlaySquare size={18} />
              Play Store
            </a>
          </Button>
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-primary flex items-center gap-2"
          >
            <a
              href={appStore}
              className="flex items-center gap-2"
              target="_blank"
            >
              <Apple size={18} />
              App Store
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
