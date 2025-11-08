import { useState, useEffect } from "react";
import {
  Plane,
  Building2,
  Home,
  Palmtree,
  Train,
  Bus,
  Car,
  FileText,
  CreditCard,
  Shield,
  MoreHorizontal,
  Menu,
  X,
} from "lucide-react";
import NAVISHR from "../../assets/img/navishr.png";

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
      id: "flights",
      icon: Plane,
      desktopLabel: "Flights",
      mobileLabel: "Flights",
    },
    {
      id: "hotels",
      icon: Building2,
      desktopLabel: "Hotels",
      mobileLabel: "Hotels",
    },
    {
      id: "homestays",
      icon: Home,
      desktopLabel: "Homestays\n& Villas",
      mobileLabel: "Homestays",
    },
    {
      id: "holiday",
      icon: Palmtree,
      desktopLabel: "Holiday Packages",
      mobileLabel: "Holiday",
    },
    {
      id: "trains",
      icon: Train,
      desktopLabel: "Trains",
      mobileLabel: "Trains",
    },
    {
      id: "buses",
      icon: Bus,
      desktopLabel: "Buses",
      mobileLabel: "Buses",
    },
    {
      id: "cabs",
      icon: Car,
      desktopLabel: "Cabs",
      mobileLabel: "Cabs",
    },
    {
      id: "visa",
      icon: FileText,
      desktopLabel: "Visa",
      mobileLabel: "Visa",
    },
    {
      id: "forex",
      icon: CreditCard,
      desktopLabel: "Forex Card\n& Currency",
      mobileLabel: "Forex",
    },
    {
      id: "insurance",
      icon: Shield,
      desktopLabel: "Travel Insurance",
      mobileLabel: "Insurance",
    },
    {
      id: "more",
      icon: MoreHorizontal,
      desktopLabel: "More",
      mobileLabel: "More",
    },
  ];

  return (
    <>
      {/* Spacer for content below */}
      <div className="h-screen bg-linear-to-b from-blue-50 to-white p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Scroll down to see the sticky navbar
        </h1>
        <p className="text-gray-600 mb-8">
          The navbar will transform into a compact horizontal layout when you
          scroll.
        </p>
        <div className="space-y-4">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">
                Content Section {i + 1}
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scroll
                to see the navbar stick and transform.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navbar - Normal State */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        <div className="w-full bg-white shadow-md">
          {/* Top Bar */}
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src={NAVISHR}
                  alt="NAVISHR"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
          <div className="bg-linear-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4">
              <div className="hidden md:flex items-center justify-start gap-1 py-4 overflow-x-auto">
                {navigationItems.slice(0, -1).map((item) => {
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
                          isActive ? "text-blue-500" : "text-gray-600"
                        }`}
                      />

                      <span
                        className={`text-xs text-center whitespace-pre-line ${
                          isActive
                            ? "text-blue-500 font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {item.desktopLabel}
                      </span>

                      {isActive && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-t-full" />
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
                            ? "border-blue-200 bg-blue-50 text-blue-600"
                            : "border-gray-200 bg-white text-gray-700 hover:border-blue-200 hover:bg-blue-50"
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 ${
                            isActive ? "text-blue-600" : "text-gray-500"
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
        <div className="w-full bg-white shadow-lg border-b-2 border-blue-500">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              {/* Logo */}
              <img
                src={NAVISHR}
                alt="NAVISHR"
                className="h-8 w-auto shrink-0 object-contain"
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
                          ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isActive ? "text-blue-600" : "text-gray-600"
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
                        ? "bg-blue-50 text-blue-600"
                        : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        isActive ? "text-blue-600" : "text-gray-500"
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
