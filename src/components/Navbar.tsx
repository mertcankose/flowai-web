import { Apple, Menu, PlaySquare, X } from "lucide-react";
import appIcon from "@/assets/images/app-icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { appStore, playStore } from "@/constants/url";

const linkClass =
  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-ink-body hover:text-primary hover:bg-wash transition-colors";

const NavLinks = ({ onNavigate }: { onNavigate?: () => void }) => (
  <>
    <Link to="/support" className={linkClass} onClick={onNavigate}>
      Support
    </Link>
    <a href={appStore} className={linkClass} target="_blank" rel="noopener noreferrer">
      <Apple size={18} />
      App Store
    </a>
    <a href={playStore} className={linkClass} target="_blank" rel="noopener noreferrer">
      <PlaySquare size={18} />
      Google Play
    </a>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/85 backdrop-blur-md z-50 border-b border-line">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={appIcon} alt="Flow AI" className="h-10 w-10 rounded-xl" />
          <span className="text-xl font-bold text-ink">Flow AI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          <NavLinks />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-ink hover:text-primary transition-colors z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-line">
          <div className="container mx-auto px-4 py-4 flex flex-col items-start gap-1">
            <NavLinks onNavigate={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
