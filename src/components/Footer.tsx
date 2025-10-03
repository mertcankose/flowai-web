import logobg from "@/assets/images/logo-bg.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-800" style={{ backgroundColor: '#F6D39C' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <img src={logobg} alt="Flow AI Logo" className="h-24 w-auto object-contain" />
            <p className="text-gray-700 text-sm text-center md:text-left max-w-xs">
              Transform your workflow with AI-powered solutions. Experience the future of productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/privacy-policy" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link to="/eula" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm">
                EULA
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="text-lg font-semibold text-gray-900">Connect With Us</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl hover:scale-110 transition-transform duration-200"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-black rounded-xl hover:scale-110 transition-transform duration-200"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl hover:scale-110 transition-transform duration-200"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-400/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Flow AI. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Made with ❤️ for better rap musics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
