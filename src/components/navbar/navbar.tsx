import { useState, useEffect } from "react";
import {
  Home,
  Users,
  Newspaper,
  BriefcaseBusiness,
  Building2,
  Plane,
  Star,
  Mail,
  Menu,
  X,
} from "lucide-react";
import NAVISHR from "../../assets/img/navishr.png";
import MainBackground from "../../assets/img/main.png";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      setIsMobileMenuOpen(false);
    }
  }, [isScrolled]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigationItems = [
    {
      id: "Home",
      icon: Home,
      desktopLabel: "Home",
      mobileLabel: "Home",
    },
    {
      id: "About Us",
      icon: Users,
      desktopLabel: "About Us",
      mobileLabel: "About Us",
    },
    {
      id: "News",
      icon: Newspaper,
      desktopLabel: "News",
      mobileLabel: "News",
    },
    {
      id: "Navis HR",
      icon: BriefcaseBusiness,
      desktopLabel: "Navis HR",
      mobileLabel: "Navis HR",
    },
    {
      id: "JAPANESE COMPANIES INDIA",
      icon: Building2,
      desktopLabel: "JAPANESE COMPANIES INDIA",
      mobileLabel: "JAPANESE COMPANIES INDIA",
    },
    {
      id: "JOBS ABROAD",
      icon: Plane,
      desktopLabel: "JOBS ABROAD",
      mobileLabel: "JOBS ABROAD",
    },
    {
      id: "NAVISTARS",
      icon: Star,
      desktopLabel: "NAVISTARS",
      mobileLabel: "NAVISTARS",
    },
    {
      id: "Contact Us",
      icon: Mail,
      desktopLabel: "Contact Us",
      mobileLabel: "Contact Us",
    },
  ];

  return (
    <>
      {/* Spacer for content below */}
      <div
        className="h-screen bg-cover bg-center p-8 flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${MainBackground})`, opacity: 5 }}
      >
        <div className="pt-16 px-12">
          <h1 className="text-5xl font-bold text-white mb-4 happy-monkey">
            Which Path will you choose for your career?
          </h1>
          <p className="text-gray-900 mb-8 font-medium poppins px-20">
            NAVIS Supports Development of the 1.4 Billion Indian Workforce for
            India, Japan, Germany, Spain and other Countries. We Create and Up
            Skill People, to Master the Foreign Language, We Train and Enhance
            their Skills, and Build Career Prospects.
          </p>
          <button
            type="button"
            className="bg-[#800000] hover:bg-[#660000] text-white font-semibold px-8 py-2 rounded-full transition-colors duration-200 shadow-md"
          >
            Enquiry Now
          </button>
        </div>
      </div>

      {/* Navbar - Normal State */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        <div className="w-full bg-transparent">
          {/* Top Bar */}
          <div className="bg-transparent border-transparent">
            <div className="max-w-auto mx-auto px-4 py-3 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={NAVISHR}
                  alt="NAVISHR"
                  className="h-15 w-auto object-contain"
                />
              </div>
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                aria-label={
                  isMobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-transparent">
            <div className="max-w-fit mx-auto px-4 bg-white border-gray-200 rounded-lg">
              <div className="hidden md:flex items-center justify-center gap-1 py-2 overflow-x-auto">
                {navigationItems.slice(0).map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`relative flex flex-col items-center min-w-[90px] px-4 py-3 rounded-lg transition-all ${
                        isActive ? "bg-white shadow-md" : "hover:bg-white/50"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 mb-2 ${
                          isActive ? "text-red-500" : "text-gray-600"
                        }`}
                      />

                      <span
                        className={`text-xs text-center whitespace-pre-line ${
                          isActive
                            ? "text-red-500 font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {item.desktopLabel}
                      </span>

                      {isActive && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-500 rounded-t-full" />
                      )}
                    </button>
                  );
                })}
              </div>
              {isMobileMenuOpen && (
                <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 py-4">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-3 rounded-lg border px-3 py-2 transition-colors ${
                          isActive
                            ? "bg-white text-red-600"
                            : "bg-white text-gray-700 hover:bg-red-50"
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 ${
                            isActive ? "text-red-600" : "text-gray-500"
                          }`}
                        />
                        <span className="text-sm font-medium">
                          {item.mobileLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar - Scrolled State (Compact) */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="w-full bg-white shadow-lg">
          <div className="max-w-auto mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              {/* Logo */}
              <img
                src={NAVISHR}
                alt="NAVISHR"
                className="h-15 w-auto shrink-0 object-contain"
              />

              {/* Compact Navigation */}
              <div className="hidden md:flex items-center gap-1 overflow-x-auto flex-1 mx-4">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded transition-all whitespace-nowrap ${
                        isActive
                          ? "text-red-600 font-semibold"
                          : "text-gray-700 hover:text-red-600"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isActive ? "text-red-600" : "text-gray-600"
                        }`}
                      />
                      <span className="text-sm">{item.mobileLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="md:hidden flex items-center gap-3 overflow-x-auto pb-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex flex-col items-center gap-1 rounded-lg px-3 py-2 text-xs transition-colors ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        isActive ? "text-red-600" : "text-gray-500"
                      }`}
                    />
                    <span className="font-medium">{item.mobileLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
