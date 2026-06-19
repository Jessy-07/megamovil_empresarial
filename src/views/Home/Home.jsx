import './Home.css'

const planes = [
  {
    id: 1,
    lineas: '2 LÍNEAS',
    datos: [
      { cantidad: '1 línea de 30 GB*', extra: null },
      { cantidad: '1 línea de 6 GB*', extra: 'CONSERVANDO TU NÚMERO' },
    ],
    precio: '$270',
    destacado: false,
  },
  {
    id: 2,
    lineas: '3 LÍNEAS',
    datos: [
      { cantidad: '1 línea de 30 GB*', extra: null },
      { cantidad: '2 línea de 6 GB*', extra: 'CONSERVANDO TU NÚMERO' },
    ],
    precio: '$360',
    destacado: false,
  },
  {
    id: 3,
    lineas: '4 LÍNEAS',
    datos: [
      { cantidad: '1 línea de 30 GB*', extra: null },
      { cantidad: '3 línea de 6 GB*', extra: 'CONSERVANDO TU NÚMERO' },
    ],
    precio: '$450',
    destacado: true,
  },
]

const redesSociales = [
  { nombre: 'Facebook', color: '#1877F2', letra: 'f' },
  { nombre: 'X', color: '#000000', letra: '𝕏' },
  { nombre: 'WhatsApp', color: '#25D366', letra: '✆' },
  { nombre: 'Telegram', color: '#229ED9', letra: '✈' },
  { nombre: 'Messenger', color: '#7B2FBE', letra: '◉' },
  { nombre: 'Snapchat', color: '#FFFC00', letra: '👻', dark: true },
  { nombre: 'Instagram', color: '#E1306C', letra: '📷' },
]

export default function Home() {
  return (
    <main className="home">
      <section className="planes-section">
        <p className="planes-label">PLANES COMPARTIDOS</p>
        <h1 className="planes-titulo">
          Conoce nuestros <em>planes de negocio</em>
        </h1>
        <p className="planes-subtitulo">
          Planes móviles con 2, 3 y 4 líneas pensados<br />
          para que tu equipo se comunique mejor.
        </p>

        <div className="planes-grid">
          {planes.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${plan.destacado ? 'plan-card--destacado' : ''}`}
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
                    {dato.extra && (
                      <p className="plan-extra">{dato.extra}</p>
                    )}
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
                className={`red-icono ${red.dark ? 'red-icono--dark' : ''}`}
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
    </main>
  )
}
