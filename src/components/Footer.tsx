import appIcon from "@/assets/images/app-icon.png";
import { Link } from "react-router-dom";
import { appStore, contactEmail, playStore } from "@/constants/url";

const linkClass = "text-ink-body hover:text-primary transition-colors duration-200 text-sm";

const Footer = () => {
  return (
    <footer className="text-ink border-t border-line bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={appIcon} alt="Flow AI" className="h-12 w-12 rounded-xl" />
              <span className="text-xl font-bold text-ink">Flow AI</span>
            </Link>
            <p className="text-ink-body text-sm text-center md:text-left max-w-xs">
              Turn any idea into a complete song with AI, and listen to radio and fresh music in one app.
            </p>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="text-lg font-semibold text-ink">Legal</h3>
            <nav className="flex flex-col items-center md:items-start gap-3">
              <Link to="/privacy-policy" className={linkClass}>
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className={linkClass}>
                Terms of Service
              </Link>
              <Link to="/eula" className={linkClass}>
                EULA
              </Link>
            </nav>
          </div>

          {/* App & Contact */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="text-lg font-semibold text-ink">Get the App</h3>
            <nav className="flex flex-col items-center md:items-start gap-3">
              <a href={appStore} target="_blank" rel="noopener noreferrer" className={linkClass}>
                App Store
              </a>
              <a href={playStore} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Google Play
              </a>
              <Link to="/support" className={linkClass}>
                Support
              </Link>
              <a href={`mailto:${contactEmail}`} className={linkClass}>
                {contactEmail}
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-line">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ink-body text-sm text-center md:text-left">
              © {new Date().getFullYear()} Flow AI. All rights reserved.
            </p>
            <p className="text-ink-muted text-xs">Made for people with a song in their head</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
