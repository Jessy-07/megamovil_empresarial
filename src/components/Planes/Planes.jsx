import { useRef } from "react";
import fbIcon from "../../assets/img/general/facebook-logo-icon.png";
import igIcon from "../../assets/img/general/instagram-logo-icon.png";
import messengerIcon from "../../assets/img/general/messenger-logo-icon.png";
import snapIcon from "../../assets/img/general/snapchat-logo-icon.png";
import telegramIcon from "../../assets/img/general/telegram-logo-icon.png";
import whatsappIcon from "../../assets/img/general/whatsap-logo-icon.png";
import xIcon from "../../assets/img/general/x-logo-icon.png";

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

const Planes = () => {
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
              className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none gap-x-6 lg:gap-x-8 gap-y-12 md:gap-y-20 items-stretch mb-16 mt-12 pb-8 lg:pb-0 hide-scrollbar px-0"
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
              className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none gap-x-6 lg:gap-x-8 gap-y-12 md:gap-y-16 items-stretch mb-10 mt-12 pb-8 lg:pb-0 hide-scrollbar px-0"
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
                  </div>

                  <p className="plan-por-solo">Por solo</p>
                  <p className="plan-precio">
                    {plan.precio} <span className="plan-mes">/ al mes</span>
                  </p>
                  <p className="plan-extra">*Adicionales a tu mensualidad</p>
                  <button className="plan-cta bg-transparent border-none p-0 outline-none block w-[calc(100%+40px)]">
                    <span className="plan-btn plan-btn--orange">Contratar aquí</span>
                    <span className="plan-btn-arrow plan-btn-arrow--orange">→</span>
                  </button>
                </div>
              ))}

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
    </>
  );
};

export default Planes;
