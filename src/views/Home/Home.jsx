import "./Home.css";
import logoMegamovil from "../../assets/home/logo_megamovil.png";
import Footer from "../../components/Footer/Footer";

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
  { nombre: "Facebook", color: "#1877F2", letra: "f" },
  { nombre: "X", color: "#000000", letra: "𝕏" },
  { nombre: "WhatsApp", color: "#25D366", letra: "✆" },
  { nombre: "Telegram", color: "#229ED9", letra: "✈" },
  { nombre: "Messenger", color: "#7B2FBE", letra: "◉" },
  { nombre: "Snapchat", color: "#FFFC00", letra: "👻", dark: true },
  { nombre: "Instagram", color: "#E1306C", letra: "📷" },
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
      <section className="bg-[#272727] flex justify-center py-16 px-6">
        <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-white text-lg font-medium">Con Mega Móvil Negocio, tu empresa siempre estará conectada.</p>
              <p className="text-white/70">
                Planes móviles para equipos que necesitan comunicarse, atender
                clientes y comunicarse desde cualquier lugar.
              </p>
            </div>
            <div className="flex items-center ">
              <a
                href=""
                className="bg-[#1414e0] rounded-full text-white text-sm font-medium px-6 py-3 hover:bg-[#0d0dbd] transition-colors"
              >
                Conoce nuestros planes
              </a>
              <span className="bg-[#ffffff] flex items-center justify-center  rounded-full text-black text-sm w-[40px] h-[40px]">→</span>
            </div>
          </div>
        </div>
      </section>

      <section className="planes-negocio-container">
        <section className="planes-section">
          <p className="planes-label">PLANES COMPARTIDOS</p>
          <h1 className="planes-titulo">
            Conoce nuestros <em>planes de negocio</em>
          </h1>
          <p className="planes-subtitulo">
            Planes móviles con 2, 3 y 4 líneas pensados
            <br />
            para que tu equipo se comunique mejor.
          </p>

          <div className="planes-grid">
            {planes.map((plan) => (
              <div
                key={plan.id}
                className={`plan-card ${plan.destacado ? "plan-card--destacado" : ""}`}
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
                  {plan.precio} <span className="plan-mes">al mes</span>
                </p>
                <div className="plan-cta">
                  <button className="plan-btn">Contrara aquí</button>
                  <button className="plan-btn-arrow">→</button>
                </div>
              </div>
            ))}
          </div>

          <div className="redes-section">
            <p className="redes-texto">Todos los planes cuentan con</p>
            <p className="redes-titulo">Redes sociales ilimitadas*</p>
            <div className="redes-iconos">
              {redesSociales.map((red) => (
                <span
                  key={red.nombre}
                  className={`red-icono ${red.dark ? "red-icono--dark" : ""}`}
                  style={{ backgroundColor: red.color }}
                  title={red.nombre}
                >
                  {red.letra}
                </span>
              ))}
            </div>
            <p className="redes-plus">+ minutos y sms</p>
          </div>
        </section>
      </section>


      <section className="bg-[#272727] flex justify-center py-16 px-6">
        <div className="max-w-[1000px] w-full grid grid-cols-1  gap-12 items-center">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <img src={logoMegamovil} alt="Mega Móvil Negocio" className="w-[200px]" />
              <p className="text-white mt-[32px] text-[32px] font-medium">La movilidad que tu equipo necesita, <br />
                <span className="text-[#FF9A00]">con la confianza que tu empresa merece</span></p>

            </div>
            <div className="flex items-center ">
              <a
                href=""
                className="bg-[#FF9A00] rounded-full text-white text-sm font-medium px-6 py-3 hover:bg-[#0d0dbd] transition-colors"
              >
                Conoce nuestros planes
              </a>
              <span className="bg-[#ffffff] flex items-center justify-center  rounded-full text-black text-sm w-[40px] h-[40px]">→</span>
            </div>
          </div>
        </div>
      </section>



      {/* Planes individuales */}
      <section className="planes-negocio-container">
        <section className="planes-section">
          <p className="planes-label">PLANES COMPARTIDOS</p>
          <h1 className="planes-titulo planes-titulo--individual">
            Conoce nuestros <em>planes individuales</em>
          </h1>
          <p className="planes-subtitulo">
            Tenemos un plan para cada forma de conectarte: 6 GB, 30 GB o GIGAS ILIMITADOS
            <br />
            para que sigas conectado a tu ritmo.
          </p>

          <div className="planes-grid">
            {planesIndividuales.map((plan) => (
              <div
                key={plan.id}
                className={`plan-card ${plan.destacado ? "plan-card--destacado-orange" : ""}`}
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
                        <span
                          key={red.nombre}
                          className={`red-icono ${red.dark ? "red-icono--dark" : ""}`}
                          style={{ backgroundColor: red.color }}
                          title={red.nombre}
                        >
                          {red.letra}
                        </span>
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
                  {plan.precio} <span className="plan-mes">al mes</span>
                </p>
                <div className="plan-cta">
                  <button className="plan-btn plan-btn--orange">Contrara aquí</button>
                  <button className="plan-btn-arrow plan-btn-arrow--orange">→</button>
                </div>
              </div>
            ))}
          </div>

          <div className="recarga-banner">
            <p className="recarga-subtitulo">¡Sigue conectado con más Gigas!</p>
            <h2 className="recarga-titulo">Compra más saldo para tu Plan Mega móvil</h2>
            <div className="recarga-cta">
              <button className="recarga-btn">quiero una recarga</button>
              <span className="recarga-arrow" >❯</span>
            </div>
          </div>
        </section>
      </section>

      {/* Sección Compatibilidad */}
      <section className="compatibilidad-container">
        <div className="compatibilidad-wrapper">
          
          <div className="compatibilidad-info">
            <p className="compatibilidad-label">DESCUBRE LA FORMA PARA OBTENER EL IMEI</p>
            <h2 className="compatibilidad-titulo">¿Mi equipo es compatible?</h2>
            
            <div className="compatibilidad-card">
              <div className="compatibilidad-icon">
                <img src="" alt="Celular" className="compatibilidad-img" />
              </div>
              <div className="compatibilidad-details">
                <span className="compatibilidad-card-label">OBTEN TU IMEI</span>
                <p className="compatibilidad-card-marca">Solo Marca<br/><strong>*#06#</strong></p>
                <span className="compatibilidad-card-label">DESDE TU CELULAR</span>
              </div>
            </div>
          </div>

          <div className="compatibilidad-action">
            <h2 className="compatibilidad-action-titulo">¡YA LO TIENES!<br/>INGRESALO AQUÍ</h2>
            <div className="compatibilidad-form">
              <input 
                type="text" 
                placeholder="INGRESA TU IMEI AQUÍ" 
                className="compatibilidad-input" 
              />
              <button className="compatibilidad-btn">Valida aquí</button>
            </div>
            <p className="compatibilidad-link">
              Conoce nuestros planes compatibles con todos los equipos, <a href="#">click aquí</a>
            </p>
          </div>

        </div>
      </section>

      {/* Nueva Sección de Información (Cobertura, Más megas, eSIM) */}
      <section className="info-cards-container">
        <div className="info-cards-grid">
          
          <div className="info-card info-card--cobertura">
            <div className="info-card-icon">
              <img src="" alt="Cobertura" className="info-card-img" />
            </div>
            <div className="info-card-content">
              <span className="info-card-label">MAYOR Y MEJOR</span>
              <h3 className="info-card-titulo">Cobertura</h3>
              <p className="info-card-texto">Navega y llama en todo México, EE.UU y Cánada</p>
              <button className="info-card-btn">Valida aquí &gt;</button>
            </div>
          </div>

          <div className="info-card info-card--megas">
            <div className="info-card-icon">
              <img src="" alt="Más megas" className="info-card-img" />
            </div>
            <div className="info-card-content">
              <span className="info-card-label">OBTEN</span>
              <h3 className="info-card-titulo">Más megas</h3>
              <p className="info-card-texto">Suma Megas a tu internet de casa al contratar Mega móvil.</p>
              <button className="info-card-btn">Valida aquí &gt;</button>
            </div>
          </div>

          <div className="info-card info-card--esim">
            <div className="info-card-icon">
              <img src="" alt="eSIM" className="info-card-img" />
            </div>
            <div className="info-card-content">
              <span className="info-card-label">TECNOLOGÍA</span>
              <h3 className="info-card-titulo">eSIM</h3>
              <p className="info-card-texto">Instala fácil y sin esperar con nuestras eSIM.</p>
              <button className="info-card-btn">Valida aquí &gt;</button>
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
                  Solicita tu NIP <br/>
                  mandando un <strong>mensaje</strong> <br/>
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
                  Danos tu NIP <br/>
                  y el <strong>número celular</strong> <br/>
                  que <strong>deseas conservar</strong> <br/>
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
                  Tu trámite está en proceso <br/>
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
                  <strong>¡LISTO!</strong> Una vez que te <br/>
                  quedes sin señal es hora de <br/>
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
