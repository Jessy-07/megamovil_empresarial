import React, { useState, useRef } from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../Home/Home.css";
import "./PlanesInternacionales.css";

const planesInternacionales = [
  {
    id: 1,
    lineas: "AMÉRICA",
    datos: [
      { cantidad: "500 MB", extra: null },
      { cantidad: "30 días", extra: null },
    ],
    precio: "$390",
    mes: "por 30 días",
    destacado: false,
  },
  {
    id: 2,
    lineas: "EUROPA",
    datos: [
      { cantidad: "500 MB", extra: null },
      { cantidad: "30 días", extra: null },
    ],
    precio: "$780",
    mes: "por 30 días",
    destacado: false,
  },
  {
    id: 3,
    lineas: "EUROPA",
    datos: [
      { cantidad: "1 GB", extra: null },
      { cantidad: "30 días", extra: null },
    ],
    precio: "$1,100",
    mes: "por 30 días",
    destacado: true,
  },
];

export default function PlanesInternacionales() {
  const [openFaq, setOpenFaq] = useState(0);
  const planesRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth;
      ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const faqs = [
    {
      question: "¿Qué incluye el plan adicional de roaming internacional?",
      answer: "Los planes adicionales de roaming incluirán una bolsa de datos específica para su uso en territorio internacional, la cual dependerá del paquete contratado."
    },
    {
      question: "¿Cuáles países son considerados Europa?",
      answer: "Albania, Alemania, Australia, Austria, Bangladés, Baréin, Bélgica, Belice, Bielorrusia, Bolivia, Bulgaria, Catar, China, Corea del Sur, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Filipinas, Finlandia, Fiyi, Francia, Ghana, Grecia, Hong Kong, Hungría, Indonesia, Irlanda, Israel, Italia, Japón, Kuwait, Letonia, Liechtenstein, Lituania, Luxemburgo, Macao, Malasia, Malta, Montenegro, Noruega, Nueva Zelanda, Países Bajos, Polonia, Portugal, Reino Unido, República Checa, República de Macedonia, Rumanía, Rusia, Serbia, Singapur, Sri Lanka, Sudáfrica, Sudán, Suecia, Suiza, Tailandia, Taiwán, Ucrania"
    },
    {
      question: "¿Cuáles países son considerados América?",
      answer: "Argentina, Brasil, Chile, Colombia, Costa Rica, Ecuador, El Salvador, Guatemala, Honduras, Nicaragua, Panamá, Paraguay, Perú, República Dominicana y Uruguay"
    },
    {
      question: "¿Cuándo comienza a aplicarse el plan de roaming?",
      answer: "Una vez sea contratado el plan roaming será activado."
    },
    {
      question: "¿Cuánto tiempo dura el plan adicional?",
      answer: "30 días naturales."
    },
    {
      question: "¿El consumo en roaming afecta mi plan base?",
      answer: "No, este plan es adicional a tu plan base por lo que no afecta."
    },
    {
      question: "¿Qué pasa si se me terminan los GB o minutos incluidos?",
      answer: "Conéctate a una red wifi y comunícate por medio de Whatsapp para poder adquirir un nuevo paquete romaing nacional WhatsApp: 33 9690 0001"
    },
    {
      question: "¿El plan adicional se renueva automáticamente?",
      answer: "No, en caso de necesitar 1 mes adicional tendrás que comunicarte con soporte al cliente para adquirir un paquete nuevo adicional."
    },
    {
      question: "¿Puedo usar mi número normalmente para llamadas y WhatsApp en el extranjero?",
      answer: "Si, tu número habitual seguirá funcionando y será compatible con el paquete contratado de roaming internacional"
    },
    {
      question: "¿Qué debo hacer si no tengo señal al llegar al país?",
      answer: "Comunícate con nuestro soporte al cliente disponible 24/7 por medio de WhatsApp: 33 9690 0001"
    },
    {
      question: "¿Puedo usar mi plan adicional en varios países durante el mismo viaje?",
      answer: "Si, siempre y cuando este dentro de la cobertura contratada."
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section
        className="bg-banner-internacional m-2 md:m-5 rounded-[20px] flex md:items-center justify-center px-4 pt-10 pb-6 md:p-12 h-auto min-h-[550px] md:min-h-[300px] xl:h-[550px] box-border relative overflow-hidden bg-cover bg-center bg-no-repeat"
      >
        <div className="max-w-[1300px] w-full grid grid-cols-1 md:grid-cols-[1.3fr_0.6fr] gap-6 relative z-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-white text-[1.6rem] lg:text-[1.8rem] xl:text-[2.5rem] font-light leading-[1.2] m-0 xl:max-w-[800px]">
              Planes Internacionales <br />
              <span className="cursive-txt text-[#FFCE85] text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem]">para conectarte donde sea</span>
            </h1>
            <button className="btn-pill btn-pill--orange mt-[330px] md:mt-[40px]">
              <span className="btn-pill-text lowercase">conoce nuestra cobertura</span>
              <span className="btn-pill-icon">❯</span>
            </button>
          </div>
        </div>
      </section>

      {/* Planes Section */}
      <section className="bg-[#e6e5e0] flex justify-center items-start px-4 py-10 md:p-12 rounded-2xl m-2 md:m-5">
        <section className="max-w-[1300px] w-full">
          <h3 className="section-label">PLANES INTERNACIONALES</h3>
          <h2 className="section-title">
            Conoce nuestros <em className="cursive-txt text-[#2252ff]">planes internacionales</em>
          </h2>
          <p className="section-desc">
            Planes móviles listos para América y Europa.
          </p>

          <div className="relative">
            <button
              onClick={() => scroll(planesRef, 'left')}
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/50 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-full w-10 h-10 flex items-center justify-center lg:hidden text-[#2252ff] font-bold text-xl transition-colors hover:bg-white/80"
            >
              &#10094;
            </button>
            <button
              onClick={() => scroll(planesRef, 'right')}
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/50 shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-full w-10 h-10 flex items-center justify-center lg:hidden text-[#2252ff] font-bold text-xl transition-colors hover:bg-white/80"
            >
              &#10095;
            </button>
            <div
              ref={planesRef}
              className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none gap-x-6 lg:gap-x-8 gap-y-12 md:gap-y-20 items-stretch mb-10 mt-12 pb-8 lg:pb-0 hide-scrollbar px-0"
            >
              {planesInternacionales.map((plan) => (
                <div
                  key={plan.id}
                  className={`plan-card w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[420px] shrink-0 snap-center ${plan.destacado ? "plan-card--destacado mt-[40px] sm:mt-0" : ""}`}
                >
                  {plan.destacado && (
                    <span className="plan-badge">¡PARA TODOS!</span>
                  )}
                  <p className="plan-categoria">PLAN INTERNACIONAL</p>
                  <h2 className="plan-lineas">{plan.lineas}</h2>
                  <hr className="plan-divider" />
                  <div className="plan-datos">
                    {plan.datos.map((dato, idx) => (
                      <div key={idx}>
                        {idx > 0 && <span className="plan-mas" style={{ textTransform: 'lowercase' }}>x</span>}
                        <p className="plan-dato">{dato.cantidad}</p>
                        {dato.extra && <p className="plan-extra">{dato.extra}</p>}
                      </div>
                    ))}
                  </div>
                  <p className="plan-por-solo">Por solo</p>
                  <p className="plan-precio">
                    {plan.precio} <span className="plan-mes">/ {plan.mes}</span>
                  </p>
                  <button className="plan-cta bg-transparent border-none p-0 outline-none block w-[calc(100%+40px)]">
                    <span className="plan-btn">Contratar aquí</span>
                    <span className="plan-btn-arrow">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* FAQ Section */}
      <section className="bg-white flex justify-center items-start px-4 py-10 md:p-12 rounded-2xl m-2 md:m-5">
        <section className="max-w-[1300px] w-full">
          <h3 className="section-label">PLANES INTERNACIONALES</h3>
          <h2 className="section-title">
            Preguntas Frecuentes
          </h2>
          <p className="section-desc">
            Conoce alguans preguntas que podrán ayudarte.
          </p>

          <div className="flex flex-col gap-4 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#faf9f4] rounded-[16px] p-6 md:p-8 cursor-pointer transition-all"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-[1.2rem] md:text-[1.4rem] font-medium m-0 pr-4">
                    {faq.question}
                  </h4>
                  <div className={`w-[32px] h-[32px] rounded-full bg-[#FF9A00] flex justify-center items-center text-white font-bold transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-[300px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[1rem] text-[#333] m-0">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}
