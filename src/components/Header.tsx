import { useEffect, useState, useCallback, memo, useRef } from "react";
import Logo from "@/assets/logoCorporativo.png";
import DarkModeToggle from "@/components/DarkModeToggle";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";

// Constantes para mejorar mantenibilidad
const HEADER_OFFSET = 80;
const SCROLL_THRESHOLD = 100;
// const MOBILE_MENU_WIDTH = "1/2";

// Tipos para mejorar type safety
type NavLink = {
  href: string;
  label: string;
  id: string;
};

const navLinks: NavLink[] = [
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#proyects", label: "Proyects", id: "proyects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#servicios", label: "Services", id: "servicios" },
  { href: "#contacto", label: "Contact", id: "contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSmoothScrolling, setIsSmoothScrolling] = useState(false);
  const { theme } = useTheme();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const { t, i18n } = useTranslation();
  const newLang = i18n.language === "es" ? "en" : "es";

  const toggleLanguage = () => {
    console.log("💻 - toggleLanguage - newLang:", newLang);
    i18n.changeLanguage(newLang);
    setIsLanguageMenuOpen(false);
  };

  const handleSmoothScroll = useCallback((targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - HEADER_OFFSET;

      setIsSmoothScrolling(true);
      setIsVisible(true);
      setScrolled(true);
      setIsMobileMenuOpen(false);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (isSmoothScrolling) {
      setIsVisible(true);
      return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > SCROLL_THRESHOLD) {
      setIsVisible(false);
      setIsMobileMenuOpen(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
    setScrolled(currentScrollY > 10);
  }, [lastScrollY, isSmoothScrolling]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleScrollEnd = () => {
      setIsSmoothScrolling(false);
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scrollend", handleScrollEnd);
    return () => window.removeEventListener("scrollend", handleScrollEnd);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLImageElement>) => {
      e.preventDefault();
      setIsSmoothScrolling(true);
      setIsVisible(true);
      setScrolled(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    []
  );

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const toggleLanguageMenu = useCallback(() => {
    setIsLanguageMenuOpen((prev) => !prev);
  }, []);

  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled || isMobileMenuOpen
      ? theme === "dark"
        ? "bg-gray-950/70 backdrop-blur-md shadow-md"
        : "bg-blue-50/50 backdrop-blur-md shadow-md"
      : "bg-transparent"
  } ${isVisible ? "translate-y-0" : "-translate-y-full"}`;

  const mobileMenuClasses = `xl:hidden fixed top-0 right-0 h-screen w-2/3 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out z-50 ${
    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
  }`;

  return (
    <>
      <header
        className={headerClasses}
        role="banner"
        aria-label="Encabezado principal"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">
              <img
                src={Logo}
                alt="Logo Alexander Ponte"
                className="h-8 w-8 cursor-pointer"
                onClick={handleLogoClick}
              />
            </h1>

            <nav
              className="hidden xl:flex items-center space-x-6"
              role="navigation"
              aria-label="Navegación principal"
            >
              <div className="flex space-x-6">
                {navLinks.map(({ href, id }) => (
                  <a
                    key={id}
                    href={href}
                    className="hover:text-blue-600 dark:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll(id);
                    }}
                  >
                    {/* {label} */}
                    {t(`nav.${id}`)}
                  </a>
                ))}
              </div>
            </nav>

            <div className="hidden xl:flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={toggleLanguageMenu}
                  className="flex items-center space-x-1 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>{newLang !== "es" ? "ES" : "EN"}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isLanguageMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-24 bg-white dark:bg-gray-800 rounded-md shadow-lg">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => toggleLanguage()}
                    >
                      {newLang.toUpperCase()}
                    </button>
                  </div>
                )}
              </div>
              <DarkModeToggle />
            </div>

            <button
              ref={menuButtonRef}
              className="xl:hidden p-2 text-gray-800 dark:text-white relative z-50"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Abrir menú"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`xl:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <nav
        ref={mobileMenuRef}
        className={mobileMenuClasses}
        role="navigation"
        aria-label="Navegación móvil"
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-6">
            {navLinks.map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-lg py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(id);
                }}
              >
                {label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-6 mt-auto border-t border-gray-200 dark:border-gray-700">
              <div className="relative">
                <button
                  onClick={toggleLanguageMenu}
                  className="flex items-center space-x-1 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>ES</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isLanguageMenuOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isLanguageMenuOpen && (
                  <div className="absolute left-0 mt-2 py-2 w-24 bg-white dark:bg-gray-800 rounded-md shadow-lg transform transition-all duration-200">
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-red-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => toggleLanguage()}
                    >
                      EN
                    </button>
                  </div>
                )}
              </div>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default memo(Header);
