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
import NAVISHRLogoWhite from "../../assets/img/navishr-white.png";
import {
  buttonVariants,
  compactNavbarVariants,
  descriptionVariants,
  mobileMenuVariants,
  navItemVariants,
  navListVariants,
  navbarVariants,
  titleVariants,
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

type HeroContent = {
  backgroundImage?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  heightClassName?: string;
};

type NavbarProps = {
  heroContent?: HeroContent | null;
  showHero?: boolean;
};

const shouldNavigateExternally = (href: string) =>
  /^(https?:)?\/\//i.test(href);

const Navbar: FC<NavbarProps> = ({ heroContent, showHero = true }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompactDesktopExpanded, setIsCompactDesktopExpanded] =
    useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    const currentItem = getItemIdFromPath(location.pathname);
    if (currentItem && currentItem !== activeTab) {
      setActiveTab(currentItem);
    }
  }, [location.pathname, activeTab]);

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

  const handleHeroButtonClick = () => {
    if (!heroContent?.buttonHref) {
      return;
    }

    if (shouldNavigateExternally(heroContent.buttonHref)) {
      window.location.href = heroContent.buttonHref;
      return;
    }

    navigate(heroContent.buttonHref);
  };

  return (
    <div className="poppins">
      {showHero && heroContent ? (
        <div
          className={`relative ${
            heroContent.heightClassName ??
            "h-[75vh] min-h-[420px] md:h-screen md:min-h-[540px]"
          } bg-cover bg-center px-4 py-16 sm:px-8 md:px-12 flex flex-col items-center justify-center text-center`}
          style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
          <div className="relative z-10 w-full max-w-4xl md:max-w-5xl lg:max-w-6xl space-y-4 pt-5">
            <motion.h1
              initial="initial"
              animate="animate"
              variants={titleVariants}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white poppins"
            >
              {heroContent.title}
            </motion.h1>
            <motion.p
              initial="initial"
              animate="animate"
              variants={descriptionVariants}
              transition={{ duration: 0.6 }}
              className="text-white font-medium poppins text-sm sm:text-base leading-relaxed sm:leading-7 px-2 sm:px-6 md:px-12"
            >
              {heroContent.description}
            </motion.p>
            {heroContent.buttonText && (
              <motion.button
                type="button"
                onClick={handleHeroButtonClick}
                initial="initial"
                animate="animate"
                variants={buttonVariants}
                transition={{ duration: 0.6 }}
                className="mx-auto bg-[#800000] hover:bg-[#660000] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors duration-200 shadow-md cursor-pointer"
              >
                {heroContent.buttonText}
              </motion.button>
            )}
          </div>
        </div>
      ) : showHero ? (
        <div className="h-24 md:h-28" aria-hidden="true" />
      ) : null}

      {/* Navbar - Normal State */}
      <AnimatePresence initial={false}>
        {!isScrolled && (
          <motion.div
            key="navbar-default"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 right-0 z-50"
          >
            <div className="w-full bg-white md:bg-transparent">
              {/* Top Bar */}
              <div className="bg-white md:bg-transparent border-transparent">
                <div className="max-w-auto mx-auto px-4 py-3 flex items-center justify-between">
                  {/* Logo */}
                  <div className="flex items-center">
                    <img
                      src={NAVISHR}
                      alt="NAVISHR"
                      className="h-8 w-auto object-contain md:hidden"
                    />
                    <img
                      src={NAVISHRLogoWhite}
                      alt="NAVISHR"
                      className="hidden h-8 w-auto object-contain md:block"
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
                  <motion.div
                    className="hidden md:flex items-center justify-center gap-1 py-2 overflow-x-auto"
                    variants={navListVariants}
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
                          onClick={() => handleNavigationSelect(item.id)}
                          className={`group relative flex flex-col items-center min-w-[90px] px-4 py-3 rounded-2xl transform transition-all duration-300 ease-out backdrop-blur-xl ${
                            isActive
                              ? "border border-white/40 bg-white/20 shadow-[0_25px_50px_-18px_rgba(15,23,42,0.35)]"
                              : "border border-white/20 bg-white/10 hover:bg-white/15 hover:-translate-y-1.5 hover:shadow-[0_25px_45px_-18px_rgba(15,23,42,0.3)]"
                          } group-hover:ring-2 group-hover:ring-red-400/40 group-hover:ring-offset-2 group-hover:ring-offset-transparent`}
                        >
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none absolute inset-0 rounded-2xl transition-all duration-500 ${
                              isActive
                                ? "bg-linear-to-br from-white/70 via-white/50 to-transparent opacity-95"
                                : "bg-linear-to-br from-white/40 via-white/20 to-transparent opacity-0 group-hover:opacity-80 group-hover:blur-sm group-hover:scale-[1.04]"
                            }`}
                          />
                          <Icon
                            className={`relative z-10 w-8 h-8 mb-2 transition-all duration-300 ${
                              isActive
                                ? "text-red-500 drop-shadow-[0_10px_22px_rgba(239,68,68,0.35)]"
                                : "text-gray-600 group-hover:-translate-y-0.5 group-hover:text-red-400 group-hover:drop-shadow-[0_8px_18px_rgba(239,68,68,0.3)]"
                            }`}
                          />

                          <span
                            className={`relative z-10 text-xs text-center font-medium whitespace-pre-line transition-colors duration-300 ${
                              isActive
                                ? "text-red-500 font-semibold drop-shadow-[0_6px_16px_rgba(239,68,68,0.35)]"
                                : "text-gray-700 group-hover:text-red-400"
                            }`}
                          >
                            {item.desktopLabel}
                          </span>

                          <span
                            aria-hidden="true"
                            className={`pointer-events-none absolute bottom-1 left-1/2 h-[3px] w-14 -translate-x-1/2 transform rounded-full bg-linear-to-r from-white/80 via-white/60 to-transparent transition-all duration-300 ${
                              isActive
                                ? "scale-100 opacity-100 shadow-[0_0_18px_rgba(255,255,255,0.35)]"
                                : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-80 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]"
                            }`}
                          />
                        </motion.button>
                      );
                    })}
                  </motion.div>
                  <AnimatePresence initial={false}>
                    {isMobileMenuOpen && (
                      <motion.div
                        key="navbar-mobile-menu"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar - Scrolled State (Compact) */}
      <AnimatePresence initial={false}>
        {isScrolled && (
          <motion.div
            key="navbar-compact"
            variants={compactNavbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 right-0 z-50"
          >
            <div className="w-full bg-white shadow-lg">
              <div className="max-w-auto mx-auto px-4">
                <div className="flex items-center justify-between py-2">
                  {/* Logo */}
                  <img
                    src={NAVISHR}
                    alt="NAVISHR"
                    className="h-11 w-auto shrink-0 object-contain"
                  />

                  {/* Compact Navigation */}
                  <div className="hidden md:flex flex-col flex-1 mx-4 items-end">
                    <motion.div
                      className="flex items-center justify-end gap-1 flex-wrap"
                      variants={navListVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {visibleItems.map((item) => {
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
                      {hiddenItems.length > 0 && (
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
                      {isCompactDesktopExpanded && hiddenItems.length > 0 && (
                        <motion.div
                          key="navbar-hidden-items"
                          className="flex flex-wrap justify-center gap-1 mt-2 w-full self-center"
                          variants={navListVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          {hiddenItems.map((item) => {
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
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
