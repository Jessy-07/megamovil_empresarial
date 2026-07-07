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
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-0 flex items-center justify-between">

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
          className="md:hidden relative w-[30px] h-[24px] flex flex-col justify-center items-center cursor-pointer z-50 border-none bg-transparent p-0"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`absolute w-[25px] h-[3px] bg-[#2E328A] rounded-[2px] transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-[8px]'}`}></span>
          <span className={`absolute w-[25px] h-[3px] bg-[#2E328A] rounded-[2px] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`absolute w-[25px] h-[3px] bg-[#2E328A] rounded-[2px] transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-[8px]'}`}></span>
        </button>

        {/* Navigation Links */}
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-[80px] md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none flex-col md:flex-row p-6 md:p-0 transition-all border-t border-[#eee] md:border-none`}>
          <ul className="flex flex-col md:flex-row list-none m-0 p-0 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <li className="relative group w-full md:w-auto">
              <div 
                className="flex items-center justify-center md:justify-start cursor-pointer w-full"
                onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
              >
                <a href="#" className="text-[#32368c] hover:text-[#FF9A00] text-[14px] lg:text-[15px] font-medium no-underline transition-colors pointer-events-none md:pointer-events-auto">
                  CONSULTA
                </a>
                <svg className={`w-4 h-4 ml-1 text-[#32368c] group-hover:text-[#FF9A00] transition-transform ${isSubmenuOpen ? 'rotate-180 md:rotate-0' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className={`relative md:absolute md:left-0 md:top-full w-full md:w-auto pt-2 z-50 ${isSubmenuOpen ? 'block' : 'hidden'} md:!hidden md:group-hover:!block`}>
                <ul className="bg-gray-50 md:bg-white md:shadow-lg rounded-md py-2 w-full md:w-48 border border-gray-100">
                  <li>
                    <Link to="/planes-internacionales" className="block px-4 py-2 text-[14px] text-[#32368c] hover:bg-gray-100 md:hover:bg-gray-50 hover:text-[#FF9A00] transition-colors text-center md:text-left">
                      Planes Internacionales
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
