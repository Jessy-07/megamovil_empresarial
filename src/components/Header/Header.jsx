import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logoMegamovil from "../../assets/img/general/megamovil-logo-blue.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white w-full h-[80px] mt-2 md:mt-5 flex items-center relative z-50">
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          {/* Logo container, ready for the user to replace if needed, but uses the existing one by default */}
          <img
            src={logoMegamovil}
            alt="Mega móvil"
            className="h-[30px] md:h-[36px] w-auto object-contain"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="xl:hidden relative w-[30px] h-[24px] flex flex-col justify-center items-center cursor-pointer z-50 border-none bg-transparent p-0"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`absolute w-[25px] h-[3px] bg-[#2E328A] rounded-[2px] transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-[8px]'}`}></span>
          <span className={`absolute w-[25px] h-[3px] bg-[#2E328A] rounded-[2px] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`absolute w-[25px] h-[3px] bg-[#2E328A] rounded-[2px] transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-[8px]'}`}></span>
        </button>

        {/* Navigation Links */}
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} xl:flex absolute xl:relative top-[80px] xl:top-0 left-0 w-full xl:w-auto bg-white xl:bg-transparent shadow-lg xl:shadow-none flex-col xl:flex-row p-6 xl:p-0 transition-all border-t border-[#eee] xl:border-none`}>
          <ul className="flex flex-col xl:flex-row list-none m-0 p-0 gap-6 xl:gap-16 items-center">
            <li className="relative group w-full xl:w-auto">
              <div
                className="flex items-center justify-center xl:justify-start cursor-pointer w-full"
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              >
                <a href="#" className="text-[#32368c] hover:text-[#FF9A00] text-[14px] lg:text-[15px] font-medium no-underline transition-colors pointer-events-none xl:pointer-events-auto">
                  CONSULTA
                </a>
                <svg className={`w-4 h-4 ml-1 text-[#32368c] group-hover:text-[#FF9A00] transition-transform ${isSubmenuOpen ? 'rotate-180 xl:rotate-0' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className={`relative xl:absolute xl:left-0 xl:top-full w-full xl:w-auto pt-2 z-50 ${isSubmenuOpen ? 'block' : 'hidden'} xl:!hidden xl:group-hover:!block`}>
                <ul className="bg-gray-50 xl:bg-white xl:shadow-lg rounded-md py-2 w-full xl:w-48 border border-gray-100">
                  <li>
                    <Link to="/planes" className="block px-4 py-2 text-[14px] text-[#32368c] hover:bg-gray-100 xl:hover:bg-gray-50 hover:text-[#FF9A00] transition-colors text-center xl:text-left">
                      Planes
                    </Link>
                  </li>
                  <li>
                    <Link to="/planes-internacionales" className="block px-4 py-2 text-[14px] text-[#32368c] hover:bg-gray-100 xl:hover:bg-gray-50 hover:text-[#FF9A00] transition-colors text-center xl:text-left">
                      Planes Internacionales
                    </Link>
                  </li>
                  <li>
                    <Link to="/compatibilidad" className="block px-4 py-2 text-[14px] text-[#32368c] hover:bg-gray-100 xl:hover:bg-gray-50 hover:text-[#FF9A00] transition-colors text-center xl:text-left">
                      Compatibilidad
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" className="text-[#32368c] hover:text-[#FF9A00] text-[14px] lg:text-[15px] font-medium no-underline transition-colors">
                CÁMBIATE A MEGA MÓVIL
              </a>
            </li>
            <li>
              <a href="#" className="text-[#32368c] hover:text-[#FF9A00] text-[14px] lg:text-[15px] font-medium no-underline transition-colors">
                PROMOCIONES
              </a>
            </li>
            <li>
              <a href="#" className="text-[#32368c] hover:text-[#FF9A00] text-[14px] lg:text-[15px] font-medium no-underline transition-colors">
                eSIM
              </a>
            </li>
            <li>
              <a href="#" className="text-[#32368c] hover:text-[#FF9A00] text-[14px] lg:text-[15px] font-medium no-underline transition-colors">
                AYUDA
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
