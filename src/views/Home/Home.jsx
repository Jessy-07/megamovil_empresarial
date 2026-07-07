import { useRef } from "react";
import "./Home.css";
import logoMegamovil from "../../assets/img/home/logo_megamovil.png";
import telefonoIcon from "../../assets/img/home/compatibilidad-telefono-icon.png";
import coberturaIcon from "../../assets/img/home/cobertura-icon.png";
import masMegasIcon from "../../assets/img/home/mas-megas-icon.png";
import esimIcon from "../../assets/img/home/esim-icon.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import fbIcon from "../../assets/img/general/facebook-logo-icon.png";
import igIcon from "../../assets/img/general/instagram-logo-icon.png";
import messengerIcon from "../../assets/img/general/messenger-logo-icon.png";
import snapIcon from "../../assets/img/general/snapchat-logo-icon.png";
import telegramIcon from "../../assets/img/general/telegram-logo-icon.png";
import whatsappIcon from "../../assets/img/general/whatsap-logo-icon.png";
import xIcon from "../../assets/img/general/x-logo-icon.png";
import solicitarNipIcon from "../../assets/img/home/solicitar-nip-icon.png";
import daTuNipIcon from "../../assets/img/home/da-tu-nip-icon.png";
import tramiteEnProcesoIcon from "../../assets/img/home/tramite-en-proceso-icon.png";
import readyIcon from "../../assets/img/home/ready-icon.png";
const planes = [
  {
    id: 1,
    lineas: "2 LÍNEAS",
    datos: [
      { cantidad: "1 línea de 30 GB*", extra: null },
      { cantidad: "1 línea de 6 GB*", extra: "CONSERVANDO TU NÚMERO" },
    ],
    precio: "$270",
    destacado: false,
  },
  {
    id: 2,
    lineas: "3 LÍNEAS",
    datos: [
      { cantidad: "1 línea de 30 GB*", extra: null },
      { cantidad: "2 línea de 6 GB*", extra: "CONSERVANDO TU NÚMERO" },
    ],
    precio: "$360",
    destacado: false,
  },
  {
    id: 3,
    lineas: "4 LÍNEAS",
    datos: [
      { cantidad: "1 línea de 30 GB*", extra: null },
      { cantidad: "3 línea de 6 GB*", extra: "CONSERVANDO TU NÚMERO" },
    ],
    precio: "$450",
    destacado: true,
  },
];

const redesSociales = [
  { nombre: "Facebook", color: "#1877F2", icon: fbIcon },
  { nombre: "X", color: "#000000", icon: xIcon },
  { nombre: "WhatsApp", color: "#25D366", icon: whatsappIcon },
  { nombre: "Telegram", color: "#229ED9", icon: telegramIcon },
  { nombre: "Messenger", color: "#7B2FBE", icon: messengerIcon },
  { nombre: "Snapchat", color: "#FFFC00", icon: snapIcon, dark: true },
  { nombre: "Instagram", color: "#E1306C", icon: igIcon },
];

const planesIndividuales = [
  {
    id: 1,
    nombre: "6 GB*",
    datos: "6 GB*",
    datosLabel: "PARA NAVEGAR",
    precio: "$100",
    destacado: false,
  },
  {
    id: 2,
    nombre: "30 GB*",
    datos: "30 GB*",
    datosLabel: "PARA NAVEGAR",
    precio: "$200",
    destacado: false,
  },
  {
    id: 3,
    nombre: "ILIMITADO",
    datos: "GIGAS ILIMITADOS",
    datosLabel: "PARA NAVEGAR",
    precio: "$300",
    destacado: true,
  },
];

export default function Home() {
  const planesCompartidosRef = useRef(null);
  const planesIndividualesRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth;
      ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <section className="bg-banner-negocio m-2 md:m-5 rounded-[20px] flex md:items-center justify-center px-4 py-10 md:p-12 h-auto min-h-[550px] md:min-h-[300px] xl:h-[550px] box-border">
        <div className="max-w-[1300px] w-full grid grid-cols-1 md:grid-cols-[1.3fr_0.6fr] gap-6">
          <div className="flex flex-col gap-7 items-center md:items-start text-center md:text-left">
            <h1 className="text-white text-[1.6rem] lg:text-[1.8rem] xl:text-[2.5rem] font-light leading-[1.2] m-0 xl:max-w-[800px]">
              Con Mega Móvil Negocio, <span className="cursive-txt text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem]">tu empresa siempre está conectada.</span>
            </h1>
            <p className="text-white mt-[260px] md:mt-[0px] text-[1.15rem] md:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.7rem] leading-[1.45] m-0 lg:max-w-[500px] xl:max-w-[700px] font-light">
              Planes móviles para equipos que necesitan comunicarse, atender
              clientes y trabajar desde cualquier lugar.
            </p>
            <button className="btn-pill btn-pill--blue">
              <span className="btn-pill-text">Conoce nuestros planes</span>
              <span className="btn-pill-icon">❯</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f2] h-auto flex justify-center items-start px-4 py-10 md:p-12 rounded-2xl m-2 md:m-5">
        <section className="max-w-[1300px] w-full">
          <h3 className="section-label">PLANES COMPARTIDOS</h3>
          <h2 className="section-title">
            Conoce nuestros <em className="cursive-txt text-[#2252ff]">planes de negocio</em>
          </h2>
          <p className="section-desc">
            Planes móviles con 2, 3 y 4 líneas pensados
            <br />
            para que tu equipo se comunique mejor.
          </p>

          <div className="relative">
            <button
              onClick={() => scroll(planesCompartidosRef, 'left')}
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/50 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-full w-10 h-10 flex items-center justify-center lg:hidden text-[#2252ff] font-bold text-xl transition-colors hover:bg-white/80"
            >
              &#10094;
            </button>
            <button
              onClick={() => scroll(planesCompartidosRef, 'right')}
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/50 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-full w-10 h-10 flex items-center justify-center lg:hidden text-[#2252ff] font-bold text-xl transition-colors hover:bg-white/80"
            >
              &#10095;
            </button>
            <div
              ref={planesCompartidosRef}
              className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none gap-x-6 lg:gap-x-8 gap-y-12 md:gap-y-20 items-start mb-10 mt-12 pb-8 lg:pb-0 hide-scrollbar px-0"
            >
              {planes.map((plan) => (
                <div
                  key={plan.id}
                  className={`plan-card w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[420px] shrink-0 snap-center ${plan.destacado ? "plan-card--destacado mt-[40px] sm:mt-0" : ""}`}
                >
                  {plan.destacado && (
                    <span className="plan-badge">¡PARA TODOS!</span>
                  )}
                  <p className="plan-categoria">PLAN NEGOCIO</p>
                  <h2 className="plan-lineas">{plan.lineas}</h2>
                  <hr className="plan-divider" />
                  <div className="plan-datos">
                    {plan.datos.map((dato, idx) => (
                      <div key={idx}>
                        {idx > 0 && <span className="plan-mas">+</span>}
                        <p className="plan-dato">{dato.cantidad}</p>
                        {dato.extra && <p className="plan-extra">{dato.extra}</p>}
                      </div>
                    ))}
                  </div>
                  <p className="plan-por-solo">Por solo</p>
                  <p className="plan-precio">
                    {plan.precio} <span className="plan-mes">/ al mes</span>
                  </p>
                  <button className="plan-cta bg-transparent border-none p-0 outline-none block w-[calc(100%+40px)]">
                    <span className="plan-btn">Contratar aquí</span>
                    <span className="plan-btn-arrow">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-2">
            <p className="text-xl md:text-[1.6rem] text-[#333] mb-1">Todos los planes cuentan con</p>
            <p className="text-2xl md:text-[2rem] font-semibold text-[#111] mb-4">Redes sociales ilimitadas*</p>
            <div className="flex justify-center gap-1 mb-3 flex-wrap">
              {redesSociales.map((red) => (
                <img
                  key={red.nombre}
                  src={red.icon}
                  alt={red.nombre}
                  className="w-[40px] md:w-[45px] h-auto object-contain transition-transform hover:-translate-y-1"
                  title={red.nombre}
                />
              ))}
            </div>
            <p className="text-xl md:text-[1.8rem] text-[#111] m-0">+ minutos y sms</p>
          </div>
        </section>
      </section>


      <section className="bg-banner-empresa h-auto min-h-[600px] md:min-h-[550px] flex justify-center py-12 md:py-16 px-6 :m-0 md:rounded-none">
        <div className="max-w-[1300px] w-full flex flex-col justify-start md:justify-center">
          <div className="flex flex-col items-center md:items-start w-full">
            <img src={logoMegamovil} alt="Mega Móvil Negocio" className="w-[200px] md:w-[250px] md:mt-0" />

            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 md:gap-12 mt-[260px] md:mt-[40px]">
              <p className="text-white text-[1.5rem] md:text-[2rem] xl:text-[2.5rem]  leading-[1.3] m-0">
                La movilidad que tu equipo necesita, <br />
                <span className="text-[#FF9A00] cursive-txt-02 text-[2rem] md:text-[2.5rem] xl:text-[3.2rem]">con la confianza que tu empresa merece</span>
              </p>

              <button className="btn-pill btn-pill--orange">
                <span className="btn-pill-text">
                  Conoce nuestros planes
                </span>
                <span className="btn-pill-icon">
                  ❯
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* Planes individuales */}
      <section className="bg-[#fff] h-auto flex justify-center items-start px-4 py-10 md:p-12 rounded-2xl m-2 md:m-5">
        <section className="max-w-[1300px] w-full">
          <h3 className="section-label">PLANES INDIVIDUALES</h3>
          <h2 className="section-title">
            Conoce nuestros <em className="cursive-txt md:text-[3.2rem] text-[#FF9A00]">planes individuales</em>
          </h2>
          <p className="section-desc">
            Tenemos un plan para cada forma de conectarte: 6 GB, 30 GB o GIGAS ILIMITADOS
            <br />
            para que sigas conectado a tu ritmo.
          </p>

          <div className="relative">
            <button
              onClick={() => scroll(planesIndividualesRef, 'left')}
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/50 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-full w-10 h-10 flex items-center justify-center lg:hidden text-[#FF9A00] font-bold text-xl transition-colors hover:bg-white/80"
            >
              &#10094;
            </button>
            <button
              onClick={() => scroll(planesIndividualesRef, 'right')}
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/50 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-full w-10 h-10 flex items-center justify-center lg:hidden text-[#FF9A00] font-bold text-xl transition-colors hover:bg-white/80"
            >
              &#10095;
            </button>
            <div
              ref={planesIndividualesRef}
              className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none gap-x-6 lg:gap-x-8 gap-y-12 md:gap-y-20 items-start mb-10 mt-12 pb-8 lg:pb-0 hide-scrollbar px-0"
            >
              {planesIndividuales.map((plan) => (
                <div
                  key={plan.id}
                  className={`plan-card w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[420px] shrink-0 snap-center ${plan.destacado ? "plan-card--destacado-orange mt-[40px] sm:mt-0" : ""}`}
                >
                  {plan.destacado && (
                    <span className="plan-badge plan-badge--orange">¡PARA TODOS!</span>
                  )}
                  <p className="plan-categoria">PLAN INDIVIDUAL</p>
                  <h2 className="plan-lineas">{plan.nombre}</h2>
                  <hr className="plan-divider" />
                  <div className="plan-datos">
                    <div>
                      <p className="plan-dato">{plan.datos}</p>
                      <p className="plan-extra">{plan.datosLabel}</p>
                    </div>
                    <div>
                      <span className="plan-mas">+</span>
                      <p className="plan-dato plan-dato--small">Redes Sociales<br />Ilimitadas*</p>
                      <div className="plan-redes-mini">
                        {redesSociales.map((red) => (
                          <img
                            key={red.nombre}
                            src={red.icon}
                            alt={red.nombre}
                            className="w-[30px] h-auto object-contain"
                            title={red.nombre}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="plan-mas">+</span>
                      <p className="plan-dato plan-dato--small">Minnutos y<br />SMS incluidas</p>
                    </div>
                  </div>
                  <p className="plan-por-solo">Por solo</p>
                  <p className="plan-precio">
                    {plan.precio} <span className="plan-mes">/ al mes</span>
                  </p>
                  <button className="plan-cta bg-transparent border-none p-0 outline-none block w-[calc(100%+40px)]">
                    <span className="plan-btn plan-btn--orange">Contratar aquí</span>
                    <span className="plan-btn-arrow plan-btn-arrow--orange">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#f4f4f4] py-10 px-8 text-center mt-8 flex flex-col items-center gap-1.5 border border-[#2252ff]">
            <p className="text-[1.6rem] m-0">¡Sigue conectado con más Gigas!</p>
            <h2 className="text-[2rem] text-[#111] -mt-2">Compra más saldo para tu Plan Mega móvil</h2>
            <button className="btn-pill btn-pill--orange mt-3">
              <span className="btn-pill-text">
                Quiero una recarga
              </span>
              <span className="btn-pill-icon">
                ❯
              </span>
            </button>
          </div>
        </section>
      </section>

      {/* Sección Compatibilidad */}
      <section className="bg-compatibilidad m-2 md:m-5 rounded-2xl px-4 py-10 md:p-12 flex justify-center">
        <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="section-label mb-2">DESCUBRE LA FORMA PARA OBTENER EL IMEI</p>
            <h2 className="section-title">¿Mi equipo es compatible?</h2>

            <div className="bg-white border border-[#FAD082] rounded px-6 lg:px-14 py-6 lg:py-8 flex flex-col sm:flex-row items-center gap-6 lg:gap-14 max-w-[500px]">
              <div className="flex items-center justify-center shrink-0">
                <img src={telefonoIcon} alt="Celular" className="w-[50px] lg:w-[70px] h-auto object-contain" />
              </div>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="text-[14px] lg:text-[16px] text-[#888] mb-1 uppercase">OBTEN TU IMEI</span>
                <p className="text-[2rem] lg:text-[2.5rem] font-normal text-[#111] mb-1 leading-[1.1]">Solo Marca<br />*#06#</p>
                <span className="text-[14px] lg:text-[16px] text-[#888] mb-1 uppercase">DESDE TU CELULAR</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center mt-10 lg:mt-0">
            <h2 className="text-[2rem] lg:text-[2.5rem] text-[#111] mb-6 leading-[1.2]">¡YA LO TIENES!<br />INGRESALO AQUÍ</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-[500px] mb-4 gap-3 sm:gap-0">
              <input
                type="text"
                placeholder="INGRESA TU IMEI AQUÍ"
                className="w-full sm:w-auto flex-grow bg-white rounded-full py-3 sm:py-4 px-6 sm:px-8 text-[14px] sm:text-[16px] text-[#333] outline-none placeholder:text-[#aaa] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-none text-center sm:text-left"
              />
              <button className="w-full sm:w-auto bg-[#FF9A00] hover:bg-[#e68a00] text-white rounded-full py-3 sm:py-4 px-6 text-[16px] font-semibold transition-colors duration-200 cursor-pointer border-none shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-10 shrink-0">Valida aquí</button>
            </div>
            <p className="text-[14px] lg:text-[16px] text-[#555] m-0">
              Conoce nuestros planes compatibles con todos los equipos, <a href="#" className=" font-semibold underline italic">click aquí</a>
            </p>
          </div>

        </div>
      </section>

      {/* Sección de Información (Cobertura, Más megas, eSIM) */}
      <section className="m-2 md:m-5 flex justify-center">
        <div className="w-full flex flex-wrap justify-center gap-2 md:gap-5">

          <div className="info-card bg-[#f8f6f2] flex-1 min-w-[300px] md:min-w-[380px]">
            <div className="info-card-icon">
              <img src={coberturaIcon} alt="Cobertura" className="info-card-img" />
            </div>
            <div className="info-card-content">
              <span className="info-card-label">MAYOR Y MEJOR</span>
              <h3 className="info-card-titulo">Cobertura</h3>
              <p className="info-card-texto">Navega y llama en todo México, EE.UU y Cánada</p>
              <button className="info-card-btn">Valida aquí &nbsp;&nbsp;&nbsp;&gt;</button>
            </div>
          </div>

          <div className="info-card bg-[#ece5d5] flex-1 min-w-[300px] md:min-w-[380px]">
            <div className="info-card-icon">
              <img src={masMegasIcon} alt="Más megas" className="info-card-img" />
            </div>
            <div className="info-card-content">
              <span className="info-card-label">OBTEN</span>
              <h3 className="info-card-titulo">Más megas</h3>
              <p className="info-card-texto">Suma Megas a tu internet de casa al contratar Mega móvil.</p>
              <button className="info-card-btn">Valida aquí &nbsp;&nbsp;&nbsp;&gt;</button>
            </div>
          </div>

          <div className="info-card bg-white flex-1 min-w-[300px] md:min-w-[380px]">
            <div className="info-card-icon">
              <img src={esimIcon} alt="eSIM" className="info-card-img" />
            </div>
            <div className="info-card-content">
              <span className="info-card-label">TECNOLOGÍA</span>
              <h3 className="info-card-titulo">eSIM</h3>
              <p className="info-card-texto">Instala fácil y sin esperar con nuestras eSIM.</p>
              <button className="info-card-btn">Valida aquí &nbsp;&nbsp;&nbsp;&gt;</button>
            </div>
          </div>

        </div>
      </section>

      {/* Pasos para cambiarte */}
      <section className="bg-[#fff] px-4 py-10 md:p-12 rounded-2xl m-2 md:m-5 flex justify-center">
        <section className="max-w-[1300px] w-full">
          <p className="section-label mb-2">PASOS PARA CAMBIARTE A MEGA MÓVIL</p>
          <h2 className="section-title">
            Conserva tu <em className="cursive-txt md:text-[3.2rem] text-[#FF9A00]">número</em>
          </h2>
          <p className="section-desc">
            Cámbiate a Mega móvil, fácil y rápido, siguiendo estos sencillos pasos.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            {/* Paso 1 */}
            <div className="paso-card w-full sm:w-[calc(50%-10px)] xl:w-[calc(25%-15px)]">
              <div className="paso-header">
                <span className="paso-numero">1</span>
                <span className="paso-titulo-header">Solicita tu NIP</span>
              </div>
              <div className="paso-body">
                <div className="paso-icon">
                  <img src={solicitarNipIcon} alt="Paso 1" className="paso-img" />
                </div>
                <p className="paso-texto">
                  Solicita tu NIP <br />
                  mandando un <strong>mensaje</strong> <br />
                  <strong>al 051</strong> con la <strong>palabra nip</strong>
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="paso-card w-full sm:w-[calc(50%-10px)] xl:w-[calc(25%-15px)]">
              <div className="paso-header">
                <span className="paso-numero">2</span>
                <span className="paso-titulo-header">Danos tu NIP</span>
              </div>
              <div className="paso-body">
                <div className="paso-icon">
                  <img src={daTuNipIcon} alt="Paso 2" className="paso-img" />
                </div>
                <p className="paso-texto">
                  Danos tu NIP <br />
                  y el <strong>número celular</strong> <br />
                  que <strong>deseas conservar</strong> <br />
                  <a href="#" className="paso-link">Contrata aquí</a>
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="paso-card w-full sm:w-[calc(50%-10px)] xl:w-[calc(25%-15px)]">
              <div className="paso-header">
                <span className="paso-numero">3</span>
                <span className="paso-titulo-header">Trámite en proceso</span>
              </div>
              <div className="paso-body">
                <div className="paso-icon">
                  <img src={tramiteEnProcesoIcon} alt="Paso 3" className="paso-img" />
                </div>
                <p className="paso-texto">
                  Tu trámite está en proceso <br />
                  y <strong>tomará de 24 a 48 horas.</strong>
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="paso-card w-full sm:w-[calc(50%-10px)] xl:w-[calc(25%-15px)]">
              <div className="paso-header">
                <span className="paso-numero">4</span>
                <span className="paso-titulo-header">¡Listo!</span>
              </div>
              <div className="paso-body">
                <div className="paso-icon">
                  <img src={readyIcon} alt="Paso 4" className="paso-img" />
                </div>
                <p className="paso-texto">
                  <strong>¡LISTO!</strong> Una vez que te <br />
                  quedes sin señal es hora de <br />
                  <strong>insertar tu chip Mega Móvil</strong>
                </p>
              </div>
            </div>

          </div>
        </section>
      </section>
      {/* Sección Contratar */}
      <section className="bg-cta flex justify-center py-16 px-4 md:px-6">
        <div className="max-w-[1300px] w-full flex justify-end items-center">
          <div className="bg-cta-card flex flex-col justify-center items-center md:items-start text-center md:text-left rounded-[24px] p-6 md:p-8 md:px-20 max-w-[680px] w-full md:h-[400px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] py-12 md:py-0">
            <p className="md:ml-8 section-label mb-2">ESTAS LISTO PARA UNIRTE</p>
            <h2 className="md:ml-8 text-[2rem] md:text-[2.5rem] text-[#111] m-0 mb-8 leading-[1.2]">
              Quiero contratar <br />
              <em className="cursive-txt text-[2.5rem] md:text-[3.2rem] text-[#FF9A00]">Mega Móvil</em>
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

      <Footer />
    </>
  );
}
