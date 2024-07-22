import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 40 * 16; // 50 rem in pixels

      if (scrollPosition >= threshold) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`background ${hideHeader ? "hidden" : ""}`}>
        <div className="menu__wrapper">
          <div className="menu__bar">
            <a
              href="/"
              title="Logo"
              className="logo"
            >
              <img
                className="w-[80px]"
                src="/logoSimp.png"
              />
            </a>
            <span
              className="material-symbols-outlined text-white menu-icon flex items-center"
              onClick={toggleMenu}
            >
              menu
            </span>
            <ul
              className={`navigation ${menuOpen ? "navigation--mobile" : ""}`}
            >
              <li>
                <a
                  href="/"
                  title="Inicio"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/nosotros"
                  title="Nosotros"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/productos"
                  title="Productos"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  title="Contacto"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
