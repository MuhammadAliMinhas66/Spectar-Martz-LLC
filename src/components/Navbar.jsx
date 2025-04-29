import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#0f172a] py-4 px-[5%] sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-[#f8fafc] font-[Poppins]"
        >
          Spectar<span className="text-[#0d6efd]">M</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            <Link
              to="/proxies"
              className="relative text-[#f8fafc] font-medium text-[1.05rem] transition-colors group"
            >
              Proxies
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0d6efd] transition-all group-hover:w-full"></span>
            </Link>

            {/* VPS Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer text-[#f8fafc] font-medium text-[1.05rem]">
                VPS <FiChevronDown className="mt-1" />
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0d6efd] transition-all group-hover:w-full"></span>
              </div>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 min-w-[200px] bg-[#0f172a] rounded-lg shadow-xl border border-white/10 mt-2 py-2 backdrop-blur-lg"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    to="/uk-vps"
                    className="flex items-center gap-3 px-4 py-3 text-[#f8fafc] hover:bg-[#0d6efd]/10 transition-colors"
                  >
                    🇬🇧 UK Server
                  </Link>
                  <Link
                    to="/usa-vps"
                    className="flex items-center gap-3 px-4 py-3 text-[#f8fafc] hover:bg-[#0d6efd]/10 transition-colors"
                  >
                    🇺🇸 USA Server
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/prices"
              className="relative text-[#f8fafc] font-medium text-[1.05rem] transition-colors group"
            >
              Prices
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0d6efd] transition-all group-hover:w-full"></span>
            </Link>

            <Link
              to="/about-us"
              className="relative text-[#f8fafc] font-medium text-[1.05rem] transition-colors group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0d6efd] transition-all group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 inset-x-0 bg-[#0f172a]/95 py-4 px-6 backdrop-blur-lg">
            <div className="flex flex-col items-center gap-4 text-center">
              <Link
                to="/proxies"
                className="text-[#f8fafc] w-full py-2"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                Proxies
              </Link>

              <div className="relative w-full">
                <button
                  className="flex items-center justify-center gap-1 text-[#f8fafc] w-full py-2"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  VPS <FiChevronDown />
                </button>

                {isDropdownOpen && (
                  <div className="mt-2">
                    <Link
                      to="/uk-vps"
                      className="block py-2 text-[#f8fafc] bg-[#0d6efd]/10 rounded-lg"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      🇬🇧 UK Server
                    </Link>
                    <Link
                      to="/usa-vps"
                      className="block py-2 text-[#f8fafc] bg-[#0d6efd]/10 rounded-lg mt-2"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      🇺🇸 USA Server
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/prices"
                className="text-[#f8fafc] w-full py-2"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                Prices
              </Link>

              <Link
                to="/about-us"
                className="text-[#f8fafc] w-full py-2"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDropdownOpen(false);
                }}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
