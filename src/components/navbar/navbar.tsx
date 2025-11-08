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
  ChevronDown,
} from "lucide-react";
import NAVISHR from "../../assets/img/navishr.png";
import NAVISHRLogoWhite from "../../assets/img/navishr-white.png";
import MainBackground from "../../assets/img/main.png";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompactDesktopExpanded, setIsCompactDesktopExpanded] =
    useState(false);

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsCompactDesktopExpanded(false);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isScrolled) {
      setIsCompactDesktopExpanded(false);
    }
  }, [isScrolled]);

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
      id: "Services",
      icon: BriefcaseBusiness,
      desktopLabel: "Services",
      mobileLabel: "Services",
    },
    {
      id: "Japanese Companies India",
      icon: Building2,
      desktopLabel: "Japanese Companies India",
      mobileLabel: "Japanese Companies India",
    },
    {
      id: "Jobs Abroad",
      icon: Plane,
      desktopLabel: "Jobs Abroad",
      mobileLabel: "Jobs Abroad",
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

  const MAX_VISIBLE_ITEMS = 6;
  const visibleItems = navigationItems.slice(0, MAX_VISIBLE_ITEMS);
  const hiddenItems = navigationItems.slice(MAX_VISIBLE_ITEMS);

  const handleDesktopSelect = (itemId: string) => {
    setActiveTab(itemId);
    setIsCompactDesktopExpanded(false);
  };

  return (
    <>
      {/* Spacer for content below */}
      <div
        className="relative h-screen min-h-[540px] bg-cover bg-center px-4 py-16 sm:px-8 md:px-12 flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url(${MainBackground})` }}
      >
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative z-10 w-full max-w-3xl md:max-w-4xl lg:max-w-5xl space-y-4 pt-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white happy-monkey">
            Which Path will you choose for your career?
          </h1>
          <p className="text-white font-medium poppins text-sm sm:text-base leading-relaxed sm:leading-7 px-2 sm:px-6 md:px-12">
            NAVIS Supports Development of the 1.4 Billion Indian Workforce for
            India, Japan, Germany, Spain and other Countries. We Create and Up
            Skill People, to Master the Foreign Language, We Train and Enhance
            their Skills, and Build Career Prospects.
          </p>
          <button
            type="button"
            className="mx-auto bg-[#800000] hover:bg-[#660000] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors duration-200 shadow-md"
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
        <div className="w-full bg-white md:bg-transparent">
          {/* Top Bar */}
          <div className="bg-white md:bg-transparent border-transparent">
            <div className="max-w-auto mx-auto px-4 py-3 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={NAVISHRLogoWhite}
                  alt="NAVISHR"
                  className="h-11 w-auto object-contain"
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
          <div className="bg-white md:bg-transparent">
            <div className="max-w-5xl mx-auto px-4 bg-white border-gray-200 rounded-lg">
              <div className="hidden md:flex items-center justify-center gap-1 py-2 overflow-x-auto">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleDesktopSelect(item.id)}
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
              <div className="hidden md:flex flex-col flex-1 mx-4 items-end">
                <div className="flex items-center justify-end gap-1 flex-wrap">
                  {visibleItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleDesktopSelect(item.id)}
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
                  {hiddenItems.length > 0 && (
                    <button
                      type="button"
                      onClick={() =>
                        setIsCompactDesktopExpanded((prev) => !prev)
                      }
                      className={`flex items-center gap-2 px-3 py-2 rounded transition-all whitespace-nowrap text-gray-700 hover:text-red-600 ${
                        isCompactDesktopExpanded
                          ? "text-red-600 font-semibold"
                          : ""
                      }`}
                      aria-expanded={isCompactDesktopExpanded}
                      aria-haspopup="true"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          isCompactDesktopExpanded ? "rotate-180" : ""
                        }`}
                      />
                      <span className="text-sm">More</span>
                    </button>
                  )}
                </div>
                {isCompactDesktopExpanded && hiddenItems.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-1 mt-2 w-full self-center">
                    {hiddenItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = activeTab === item.id;

                      return (
                        <button
                          key={item.id}
                          onClick={() => handleDesktopSelect(item.id)}
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
                )}
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
                      <span className="text-sm font-medium ">
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
    </>
  );
};

export default Navbar;
