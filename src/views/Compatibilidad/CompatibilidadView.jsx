import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "../Home/Home.css";

const CompatibilidadView = () => {
  return (
    <>
      <Header />
      <div>

        {/* Hero Section - Inspirado en el bg-cta de Home.jsx */}
        <section className="bg-cta flex justify-center py-16 px-4 md:px-6 m-2 md:m-5 rounded-2xl">
          <div className="max-w-[1300px] w-full flex justify-end items-center">
            <div className="bg-cta-card flex flex-col justify-center items-center md:items-start text-center md:text-left rounded-[24px] p-6 md:p-8 md:px-20 max-w-[680px] w-full md:h-[400px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] py-12 md:py-0">
              <p className="md:ml-8 section-label mb-2">VALIDA TU DISPOSITIVO</p>
              <h2 className="md:ml-8 text-[2rem] md:text-[2.5rem] text-[#111] m-0 mb-8 leading-[1.2]">
                ¿Tu equipo es <br />
                <em className="cursive-txt text-[2.5rem] md:text-[3.2rem] text-[#FF9A00]">compatible?</em>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-3 sm:gap-0">
                <input
                  type="text"
                  placeholder="INGRESA TU IMEI AQUÍ"
                  className="w-full sm:w-auto flex-grow bg-white rounded-full py-3 sm:py-4 px-6 sm:px-8 text-[14px] sm:text-[16px] text-[#333] outline-none placeholder:text-[#aaa] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-none text-center sm:text-left"
                />
                <button className="w-full sm:w-auto bg-[#FF9A00] hover:bg-[#e68a00] text-white rounded-full py-3 sm:py-4 px-8 text-[16px] font-semibold transition-colors duration-200 cursor-pointer border-none shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-10 shrink-0">
                  Valida aquí
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 1: IMEI (Diseño copiado exacto de "Conserva tu número") */}
        <section className="bg-[#f8f6f2] flex justify-center py-10 md:py-14 px-4 m-2 md:m-5 rounded-[20px] shadow-sm border border-[#eaeaea]">
          <div className="max-w-[1300px] w-full">
            <p className="section-label mb-2">OBTÉN TU IMEI</p>
            <h2 className="section-title">
              ¿Cómo obtener el <em className="cursive-txt md:text-[3.2rem] text-[#FF9A00]">código IMEI</em> de tu celular?
            </h2>
            <p className="section-desc">
              Existen tres opciones para obtener el IMEI
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              {/* Card 1 */}
              <div className="paso-card w-full sm:w-[calc(50%-10px)] xl:w-[calc(33.33%-15px)]">
                <div className="paso-header">
                  <span className="paso-numero">1</span>
                  <span className="paso-titulo-header">Marca *#06#</span>
                </div>
                <div className="paso-body">
                  <div className="paso-icon">
                    <img src="" alt="Marca *#06#" className="paso-img" />
                  </div>
                  <p className="paso-texto">
                    desde tu celular
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="paso-card w-full sm:w-[calc(50%-10px)] xl:w-[calc(33.33%-15px)]">
                <div className="paso-header">
                  <span className="paso-numero">2</span>
                  <span className="paso-titulo-header">Desde la configuración</span>
                </div>
                <div className="paso-body">
                  <div className="paso-icon">
                    <img src="" alt="Configuración" className="paso-img" />
                  </div>
                  <p className="paso-texto">
                    de tu equipo <br />
                    <span className="text-[14px]">(Son entre 15 y 17 números)</span>
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="paso-card w-full sm:w-[calc(50%-10px)] xl:w-[calc(33.33%-15px)]">
                <div className="paso-header">
                  <span className="paso-numero">3</span>
                  <span className="paso-titulo-header">Impreso en la etiqueta</span>
                </div>
                <div className="paso-body">
                  <div className="paso-icon">
                    <img src="" alt="Etiqueta" className="paso-img" />
                  </div>
                  <p className="paso-texto">
                    de la batería de tu dispositivo <br />
                    <span className="text-[14px]">(O en la caja)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default CompatibilidadView;
