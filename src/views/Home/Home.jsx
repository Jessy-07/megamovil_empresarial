import "./Home.css";
import logoMegamovil from "../../assets/img/home/logo_megamovil.png";
import telefonoIcon from "../../assets/img/home/compatibilidad-telefono-icon.png";
import coberturaIcon from "../../assets/img/home/cobertura-icon.png";
import masMegasIcon from "../../assets/img/home/mas-megas-icon.png";
import esimIcon from "../../assets/img/home/esim-icon.png";
import Footer from "../../components/Footer/Footer";
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

export default function Home() {
  return (
    <>
      <section className="megamovil-negocio-container m-5 rounded-[20px] flex items-center justify-center px-6 py-10 md:p-12 h-auto min-h-[480px] md:h-[550px] box-border">
        <div className="max-w-[1300px] w-full grid grid-cols-1 md:grid-cols-[1.3fr_0.6fr] gap-6">
          <div className="flex flex-col gap-7 items-start text-left">
            <h1 className="text-white text-[2.2rem] md:text-[2.5rem] font-light leading-[1.2] m-0">
              Con Mega Móvil Negocio, <span className="cursive-txt md:text-[3.5rem]"  >tu empresa <br />siempre está conectada.</span>
            </h1>
            <p className="text-white/95 text-[1.15rem] md:text-[1.7rem] leading-[1.45] m-0 max-w-[650px] font-light">
              Planes móviles para equipos que necesitan comunicarse, atender
              clientes y trabajar desde cualquier lugar.
            </p>
            <button className="group flex items-center border-none bg-transparent p-0 cursor-pointer outline-none">
              <span className="bg-[#1f5eff] group-hover:bg-[#0e4ce6] text-white rounded-full pl-8 pr-10 py-3.5 text-[0.9rem] font-medium transition-colors duration-200">
                Conoce nuestros planes
              </span>
              <span className="bg-white text-[#1f5eff] rounded-full w-[45px] h-[45px] flex items-center justify-center text-[1.1rem] font-bold transition-transform duration-200 group-hover:translate-x-2 shadow-[0_4px_10px_rgba(0,0,0,0.1)] -ml-5">
                ❯
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f6f2] h-auto flex justify-center items-start py-12 px-6 rounded-2xl m-5">
        <section className="max-w-[1300px] w-full">
          <h3 className="text-[16px] font-normal  text-[#555] uppercase">PLANES COMPARTIDOS</h3>
          <h2 className="text-[2.2rem] md:text-[2.5rem] font-medium text-[#111] mb-6 leading-[1.2]">
            Conoce nuestros <em className="cursive-txt md:text-[3.2rem] text-[#2252ff]">planes de negocio</em>
          </h2>
          <p className="text-lg md:text-[1.6rem]  mb-9 leading-[1.5]">
            Planes móviles con 2, 3 y 4 líneas pensados
            <br />
            para que tu equipo se comunique mejor.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 items-start mb-10 mt-12">
            {planes.map((plan) => (
              <div
                key={plan.id}
                className={`plan-card w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[420px] ${plan.destacado ? "plan-card--destacado mt-[40px] sm:mt-0" : ""}`}
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

          <div className="text-center mt-2">
            <p className="text-xl md:text-[1.6rem] text-[#333] mb-1">Todos los planes cuentan con</p>
            <p className="text-2xl md:text-[2rem] font-semibold text-[#111] mb-4">Redes sociales ilimitadas*</p>
            <div className="flex justify-center gap-1 mb-3 flex-wrap">
              {redesSociales.map((red) => (
                <img
                  key={red.nombre}
                  src={red.icon}
                  alt={red.nombre}
                  className="w-[50px] md:w-[45px] h-auto object-contain transition-transform hover:-translate-y-1"
                  title={red.nombre}
                />
              ))}
            </div>
            <p className="text-xl md:text-[1.8rem] text-[#111] m-0">+ minutos y sms</p>
          </div>
        </section>
      </section>


      <section className="megamovil-empresa-container h-auto min-h-[480px] md:h-[550px] flex justify-center py-16 px-6">
        <div className="max-w-[1300px] w-full grid grid-cols-1  gap-12 items-center">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <img src={logoMegamovil} alt="Mega Móvil Negocio" className="w-[250px]" />
              <p className="text-white mt-[40px] md:text-[2.5rem] leading-[1.3]">La movilidad que tu equipo necesita, <br />
                <span className="text-[#FF9A00] cursive-txt md:text-[3.2rem]">con la confianza que tu empresa merece</span></p>

            </div>
            <button className="group flex items-center border-none bg-transparent p-0 cursor-pointer outline-none">
              <span className="bg-[#FF9A00] group-hover:bg-[#e68a00] text-white rounded-full pl-8 pr-10 py-3.5 text-[0.9rem] font-medium transition-colors duration-200">
                Conoce nuestros planes
              </span>
              <span className="bg-white text-[#FF9A00] rounded-full w-[45px] h-[45px] flex items-center justify-center text-[1.1rem] font-bold transition-transform duration-200 group-hover:translate-x-2 shadow-[0_4px_10px_rgba(0,0,0,0.1)] -ml-5">
                ❯
              </span>
            </button>
          </div>
        </div>
      </section>



      {/* Planes individuales */}
      <section className="bg-[#fff] h-auto flex justify-center items-start py-12 px-6 rounded-2xl m-5">
        <section className="max-w-[1300px] w-full">
          <h3 className="text-[16px] font-normal text-[#555] uppercase">PLANES INDIVIDUALES</h3>
          <h2 className="text-[2.2rem] md:text-[2.5rem] font-medium text-[#111] mb-6 leading-[1.2]">
            Conoce nuestros <em className="cursive-txt md:text-[3.2rem] text-[#FF9A00]">planes individuales</em>
          </h2>
          <p className="text-lg md:text-[1.6rem] mb-9 leading-[1.5]">
            Tenemos un plan para cada forma de conectarte: 6 GB, 30 GB o GIGAS ILIMITADOS
            <br />
            para que sigas conectado a tu ritmo.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-16 items-start mb-10 mt-12">
            {planesIndividuales.map((plan) => (
              <div
                key={plan.id}
                className={`plan-card w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[420px] ${plan.destacado ? "plan-card--destacado-orange mt-[40px] sm:mt-0" : ""}`}
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

          <div className="recarga-banner">
            <p className="recarga-subtitulo">¡Sigue conectado con más Gigas!</p>
            <h2 className="recarga-titulo">Compra más saldo para tu Plan Mega móvil</h2>
            <button className="group flex items-center border-none bg-transparent p-0 cursor-pointer outline-none mt-3">
              <span className="bg-[#FF9A00] group-hover:bg-[#e68a00] text-white rounded-full pl-8 pr-10 py-3.5 text-[0.9rem] font-medium transition-colors duration-200">
                Quiero una recarga
              </span>
              <span className="bg-white text-[#FF9A00] rounded-full w-[45px] h-[45px] flex items-center justify-center text-[1.1rem] font-bold transition-transform duration-200 group-hover:translate-x-2 shadow-[0_4px_10px_rgba(0,0,0,0.1)] -ml-5">
                ❯
              </span>
            </button>
          </div>
        </section>
      </section>

      {/* Sección Compatibilidad */}
      <section className="compatibilidad-container bg-[#FAF6F3] m-5 rounded-2xl py-16 px-12 flex justify-center">
        <div className="max-w-[1300px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-center">

          <div className="flex flex-col">
            <p className="text-[16px] font-normal text-[#555] uppercase">DESCUBRE LA FORMA PARA OBTENER EL IMEI</p>
            <h2 className="text-[2.5rem]  text-[#111] mb-8 leading-[1.2]">¿Mi equipo es compatible?</h2>

            <div className="bg-white border border-[#FAD082] rounded px-14 py-8 flex items-center gap-14 max-w-[500px]">
              <div className="flex items-center justify-center shrink-0">
                <img src={telefonoIcon} alt="Celular" className="w-[80px] md:w-[70px] h-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] text-[#888] mb-1 uppercase">OBTEN TU IMEI</span>
                <p className="text-[2.5rem] font-normal text-[#111] mb-1 leading-[1.1]">Solo Marca<br />*#06#</p>
                <span className="text-[16px] text-[#888] mb-1 uppercase">DESDE TU CELULAR</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center mt-10 md:mt-0">
            <h2 className="text-[2.5rem] text-[#111] mb-6 leading-[1.2]">¡YA LO TIENES!<br />INGRESALO AQUÍ</h2>
            <div className="flex items-center justify-center w-full max-w-[500px] mb-4">
              <input
                type="text"
                placeholder="INGRESA TU IMEI AQUÍ"
                className="flex-grow bg-white rounded-full py-4 px-8 text-[16px] text-[#333] outline-none placeholder:text-[#aaa] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-none"
              />
              <button className="bg-[#FF9A00] hover:bg-[#e68a00] text-white rounded-full py-4 px-6 text-[16px] font-semibold transition-colors duration-200 cursor-pointer border-none shadow-[0_4px_12px_rgba(0,0,0,0.05)] z-10 shrink-0">Valida aquí</button>
            </div>
            <p className="text-[16px] text-[#555] m-0">
              Conoce nuestros planes compatibles con todos los equipos, <a href="#" className=" font-semibold underline italic">click aquí</a>
            </p>
          </div>

        </div>
      </section>

      {/* Sección de Información (Cobertura, Más megas, eSIM) */}
      <section className="py-5 mx-5 flex justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="info-card bg-[#f8f6f2]">
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

          <div className="info-card bg-[#ece5d5]">
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

          <div className="info-card bg-white">
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
      <section className="pasos-container">
        <section className="pasos-section">
          <p className="pasos-label">PASOS PARA CAMBIARTE A MEGA MÓVIL</p>
          <h2 className="pasos-titulo">
            Conserva tu <em>número</em>
          </h2>
          <p className="pasos-subtitulo">
            Cámbiate a Mega móvil, fácil y rápido, siguiendo estos sencillos pasos.
          </p>

          <div className="pasos-grid">

            {/* Paso 1 */}
            <div className="paso-card">
              <div className="paso-header">
                <span className="paso-numero">1</span>
                <span className="paso-titulo-header">Solicita tu NIP</span>
              </div>
              <div className="paso-body">
                <div className="paso-icon">
                  <img src="" alt="Paso 1" className="paso-img" />
                </div>
                <p className="paso-texto">
                  Solicita tu NIP <br />
                  mandando un <strong>mensaje</strong> <br />
                  <strong>al 051</strong> con la <strong>palabra nip</strong>
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="paso-card">
              <div className="paso-header">
                <span className="paso-numero">2</span>
                <span className="paso-titulo-header">Danos tu NIP</span>
              </div>
              <div className="paso-body">
                <div className="paso-icon">
                  <img src="" alt="Paso 2" className="paso-img" />
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
            <div className="paso-card">
              <div className="paso-header">
                <span className="paso-numero">3</span>
                <span className="paso-titulo-header">Trámite en proceso</span>
              </div>
              <div className="paso-body">
                <div className="paso-icon">
                  <img src="" alt="Paso 3" className="paso-img" />
                </div>
                <p className="paso-texto">
                  Tu trámite está en proceso <br />
                  y <strong>tomará de 24 a 48 horas.</strong>
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="paso-card">
              <div className="paso-header">
                <span className="paso-numero">4</span>
                <span className="paso-titulo-header">¡Listo!</span>
              </div>
              <div className="paso-body">
                <div className="paso-icon">
                  <img src="" alt="Paso 4" className="paso-img" />
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
      <section className="contratar-section" style={{ backgroundImage: "url('')" }}>
        <div className="contratar-container">
          <div className="contratar-cta">
            <p className="contratar-label">ESTAS LISTO PARA UNIRTE</p>
            <h2 className="contratar-titulo">
              Quiero contratar <br />
              <em>Mega Móvil</em>
            </h2>
            <div className="contratar-form">
              <input
                type="text"
                placeholder="INGRESA TU IMEI AQUÍ"
                className="contratar-input"
              />
              <button className="contratar-btn">Valida aquí</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
