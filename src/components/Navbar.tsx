import { Apple, Menu, PlaySquare, X } from "lucide-react";
import { Button } from "./ui/button";
import logobg from "@/assets/images/logo-bg.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { appStore, playStore } from "@/constants/url";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-gray-300/30 shadow-sm"
      style={{ backgroundColor: "rgba(246, 211, 156, 0.85)" }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logobg} alt="Flow AI Logo" className="h-20 md:h-20 w-full object-cover" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-gray-800 hover:text-gray-900 hover:bg-white/40 flex items-center gap-2 font-medium"
          >
            <Link to="/support" className="flex items-center gap-2">
              Support
            </Link>
          </Button>
          {/*
          <Button variant="ghost" className="text-gray-700 hover:text-primary flex items-center gap-2">
            <a href={playStore} className="flex items-center gap-2" target="_blank">
              <PlaySquare size={18} />
              Play Store
            </a>
          </Button>
          <Button variant="ghost" className="text-gray-700 hover:text-primary flex items-center gap-2">
            <a href={appStore} className="flex items-center gap-2" target="_blank">
              <Apple size={18} />
              App Store
            </a>
          </Button>
          */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="md:hidden text-gray-800 hover:text-gray-900 transition-colors z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          absolute top-16 left-0 w-full border-b border-gray-300/30
          transform transition-all duration-300 ease-in-out md:hidden
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
        style={{ backgroundColor: "#F6D39C" }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col items-start gap-4">
          <Button
            variant="ghost"
            className="text-gray-800 hover:text-gray-900 hover:bg-white/40 flex items-center gap-2 font-medium"
          >
            <Link to="/support" className="flex items-center gap-2">
              Support
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="text-gray-800 hover:text-gray-900 hover:bg-white/40 flex items-center gap-2 font-medium"
          >
            <a href={playStore} className="flex items-center gap-2" target="_blank">
              <PlaySquare size={18} />
              Play Store
            </a>
          </Button>
          <Button
            variant="ghost"
            className="text-gray-800 hover:text-gray-900 hover:bg-white/40 flex items-center gap-2 font-medium"
          >
            <a href={appStore} className="flex items-center gap-2" target="_blank">
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
