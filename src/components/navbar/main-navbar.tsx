import { useState, useEffect } from "react";
import type { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import {
  compactNavbarVariants,
  mobileMenuVariants,
  navItemVariants,
  navListVariants,
} from "../animations/contentAnimations";
import { AnimatePresence, motion } from "framer-motion";

const NAVIGATION_PATHS: Record<string, string> = {
  Home: "/",
  "About Us": "/about-us",
  News: "/news",
  Services: "/services",
  "Japanese Companies India": "/japanese-companies-india",
  "Jobs Abroad": "/jobs-abroad",
  NAVISTARS: "/navistars",
  "Contact Us": "/contact-us",
};

const normalizePath = (path: string) => {
  if (path === "/") {
    return path;
  }
  return path.replace(/\/+$/, "") || "/";
};

const PATH_TO_NAV_ITEM: Record<string, string> = Object.entries(
  NAVIGATION_PATHS
).reduce((acc, [itemId, mappedPath]) => {
  acc[normalizePath(mappedPath)] = itemId;
  return acc;
}, {} as Record<string, string>);

const getItemIdFromPath = (path: string) =>
  PATH_TO_NAV_ITEM[normalizePath(path)] ?? null;

const MainNavbar: FC = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompactDesktopExpanded, setIsCompactDesktopExpanded] =
    useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const VISIBLE_DESKTOP_ITEM_COUNT = 6;
  const visibleDesktopItems = navigationItems.slice(
    0,
    VISIBLE_DESKTOP_ITEM_COUNT
  );
  const hiddenDesktopItems = navigationItems.slice(VISIBLE_DESKTOP_ITEM_COUNT);

  const handleNavigationSelect = (
    itemId: string,
    options?: { closeMobileMenu?: boolean }
  ) => {
    setActiveTab(itemId);
    const targetPath = NAVIGATION_PATHS[itemId];
    if (targetPath) {
      navigate(targetPath);
    }
    setIsCompactDesktopExpanded(false);
    if (options?.closeMobileMenu) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const currentItem = getItemIdFromPath(location.pathname);
    if (currentItem && currentItem !== activeTab) {
      setActiveTab(currentItem);
    }
  }, [location.pathname, activeTab]);

  return (
    <>
      {/* Navbar */}
      <motion.div
        key="navbar-compact"
        variants={compactNavbarVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50"
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
                <motion.div
                  className="flex items-center justify-end gap-1 flex-wrap"
                  variants={navListVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {visibleDesktopItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                      <motion.button
                        key={item.id}
                        variants={navItemVariants}
                        onClick={() => handleNavigationSelect(item.id)}
                        className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 whitespace-nowrap backdrop-blur-lg ${
                          isActive
                            ? "border border-white/40 bg-white/20 font-semibold text-white shadow-[0_20px_45px_-18px_rgba(15,23,42,0.3)]"
                            : "border border-white/15 text-gray-700 hover:bg-white/10 hover:-translate-y-1 hover:text-red-400 hover:shadow-[0_18px_35px_-16px_rgba(15,23,42,0.25)]"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none absolute inset-0 rounded-xl transition-all duration-300 ${
                            isActive
                              ? "bg-linear-to-r from-white/60 via-white/45 to-transparent opacity-85"
                              : "bg-linear-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-70 group-hover:blur-sm"
                          }`}
                        />
                        <Icon
                          className={`relative z-10 w-5 h-5 transition-all duration-300 ${
                            isActive
                              ? "text-red-500 drop-shadow-[0_6px_14px_rgba(239,68,68,0.35)]"
                              : "text-gray-600 group-hover:text-red-400 group-hover:drop-shadow-[0_6px_14px_rgba(239,68,68,0.3)]"
                          }`}
                        />
                        <span
                          className={`relative z-10 text-sm transition-colors duration-300 ${
                            isActive
                              ? "text-red-500 drop-shadow-[0_3px_10px_rgba(239,68,68,0.3)]"
                              : "group-hover:text-red-400"
                          }`}
                        >
                          {item.mobileLabel}
                        </span>
                      </motion.button>
                    );
                  })}
                  {hiddenDesktopItems.length > 0 && (
                    <motion.button
                      key="navbar-more-button"
                      type="button"
                      variants={navItemVariants}
                      onClick={() =>
                        setIsCompactDesktopExpanded((prev) => !prev)
                      }
                      className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 whitespace-nowrap backdrop-blur-lg ${
                        isCompactDesktopExpanded
                          ? "border border-white/40 bg-white/20 font-semibold text-white shadow-[0_20px_45px_-18px_rgba(15,23,42,0.3)]"
                          : "border border-white/15 text-gray-700 hover:bg-white/10 hover:-translate-y-1 hover:text-red-400 hover:shadow-[0_18px_35px_-16px_rgba(15,23,42,0.25)]"
                      }`}
                      aria-expanded={isCompactDesktopExpanded}
                      aria-haspopup="true"
                    >
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-0 rounded-xl transition-all duration-300 ${
                          isCompactDesktopExpanded
                            ? "bg-linear-to-r from-white/60 via-white/45 to-transparent opacity-85"
                            : "bg-linear-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-70 group-hover:blur-sm"
                        }`}
                      />
                      <ChevronDown
                        className={`relative z-10 w-5 h-5 transition-transform duration-300 ${
                          isCompactDesktopExpanded
                            ? "rotate-180 text-red-500 drop-shadow-[0_6px_14px_rgba(239,68,68,0.35)]"
                            : "text-gray-600 group-hover:text-red-400"
                        }`}
                      />
                      <span
                        className={`relative z-10 text-sm transition-colors duration-300 ${
                          isCompactDesktopExpanded
                            ? "text-red-500 drop-shadow-[0_3px_10px_rgba(239,68,68,0.3)]"
                            : "group-hover:text-red-400"
                        }`}
                      >
                        More
                      </span>
                    </motion.button>
                  )}
                </motion.div>
                <AnimatePresence initial={false}>
                  {isCompactDesktopExpanded &&
                    hiddenDesktopItems.length > 0 && (
                      <motion.div
                        key="navbar-hidden-items"
                        className="flex flex-wrap justify-center gap-1 mt-2 w-full self-center"
                        variants={navListVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        {hiddenDesktopItems.map((item) => {
                          const Icon = item.icon;
                          const isActive = activeTab === item.id;

                          return (
                            <motion.button
                              key={item.id}
                              variants={navItemVariants}
                              onClick={() => handleNavigationSelect(item.id)}
                              className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 whitespace-nowrap backdrop-blur-lg ${
                                isActive
                                  ? "border border-white/40 bg-white/20 font-semibold text-white shadow-[0_20px_45px_-18px_rgba(15,23,42,0.3)]"
                                  : "border border-white/15 text-gray-700 hover:bg-white/10 hover:-translate-y-1 hover:text-red-400 hover:shadow-[0_18px_35px_-16px_rgba(15,23,42,0.25)]"
                              }`}
                            >
                              <span
                                aria-hidden="true"
                                className={`pointer-events-none absolute inset-0 rounded-xl transition-all duration-300 ${
                                  isActive
                                    ? "bg-linear-to-r from-white/60 via-white/45 to-transparent opacity-85"
                                    : "bg-linear-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-70 group-hover:blur-sm"
                                }`}
                              />
                              <Icon
                                className={`relative z-10 w-5 h-5 transition-all duration-300 ${
                                  isActive
                                    ? "text-red-500 drop-shadow-[0_6px_14px_rgba(239,68,68,0.35)]"
                                    : "text-gray-600 group-hover:text-red-400 group-hover:drop-shadow-[0_6px_14px_rgba(239,68,68,0.3)]"
                                }`}
                              />
                              <span
                                className={`relative z-10 text-sm transition-colors duration-300 ${
                                  isActive
                                    ? "text-red-500 drop-shadow-[0_3px_10px_rgba(239,68,68,0.3)]"
                                    : "group-hover:text-red-400"
                                }`}
                              >
                                {item.mobileLabel}
                              </span>
                            </motion.button>
                          );
                        })}
                      </motion.div>
                    )}
                </AnimatePresence>
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
            <AnimatePresence initial={false}>
              {isMobileMenuOpen && (
                <motion.div
                  key="navbar-compact-mobile-menu"
                  className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 py-4"
                  variants={mobileMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                      <motion.button
                        key={item.id}
                        variants={navItemVariants}
                        onClick={() => {
                          handleNavigationSelect(item.id, {
                            closeMobileMenu: true,
                          });
                        }}
                        className={`group relative flex items-center gap-3 rounded-2xl border px-3 py-2 transition-all duration-300 backdrop-blur-lg ${
                          isActive
                            ? "border-white/40 bg-white/20 text-white shadow-[0_22px_45px_-16px_rgba(15,23,42,0.3)]"
                            : "border-white/15 bg-white/10 text-gray-700 hover:bg-white/15 hover:-translate-y-1 hover:shadow-[0_24px_50px_-18px_rgba(15,23,42,0.25)]"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none absolute inset-0 rounded-2xl transition-all duration-300 ${
                            isActive
                              ? "bg-linear-to-br from-white/60 via-white/40 to-transparent opacity-85"
                              : "bg-linear-to-br from-white/30 via-white/15 to-transparent opacity-0 group-hover:opacity-70 group-hover:blur-sm"
                          }`}
                        />
                        <Icon
                          className={`relative z-10 h-6 w-6 transition-all duration-300 ${
                            isActive
                              ? "text-red-500 drop-shadow-[0_8px_18px_rgba(239,68,68,0.35)]"
                              : "text-gray-500 group-hover:text-red-400 group-hover:drop-shadow-[0_8px_18px_rgba(239,68,68,0.3)]"
                          }`}
                        />
                        <span
                          className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                            isActive
                              ? "text-red-500 drop-shadow-[0_4px_12px_rgba(239,68,68,0.35)]"
                              : "group-hover:text-red-400"
                          }`}
                        >
                          {item.mobileLabel}
                        </span>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MainNavbar;
