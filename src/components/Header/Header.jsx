import { useState } from "react";
import "./Header.css";
import logoMegamovil from "../../assets/img/general/megamovil-logo-blue.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white w-full h-[80px] mt-2 md:mt-5 flex items-center relative z-50">
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-5 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">
          {/* Logo container, ready for the user to replace if needed, but uses the existing one by default */}
          <img
            src={logoMegamovil}
            alt="Mega móvil"
            className="h-[30px] md:h-[36px] w-auto object-contain"
          />
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-[40px] h-[40px] border-none bg-transparent cursor-pointer z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-[25px] h-[3px] bg-[#2E328A] rounded-[2px] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : 'mb-[5px]'}`}></span>
          <span className={`block w-[25px] h-[3px] bg-[#2E328A] rounded-[2px] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-[5px]'}`}></span>
          <span className={`block w-[25px] h-[3px] bg-[#2E328A] rounded-[2px] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-[80px] md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none flex-col md:flex-row p-6 md:p-0 transition-all border-t border-[#eee] md:border-none`}>
          <ul className="flex flex-col md:flex-row list-none m-0 p-0 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <li>
              <a href="#" className="text-[#32368c] hover:text-[#FF9A00] text-[14px] lg:text-[15px] font-medium no-underline transition-colors">
                CONSULTA
              </a>
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
