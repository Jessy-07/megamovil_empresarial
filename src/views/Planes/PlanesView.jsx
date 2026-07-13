import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Planes from "../../components/Planes/Planes";
// You might need to import Home.css if Planes relies on it, or the global styles handle it.
import "../Home/Home.css"; // We'll use Home.css for the moment as Planes components use these styles

const PlanesView = () => {
  return (
    <>
      <Header />
      <div> {/* Add some padding top to account for the header */}
        {/* Hero Banner */}
        <section
          className="bg-banner-internacional m-2 md:m-5 rounded-[20px] flex md:items-center justify-center px-4 pt-10 pb-6 md:p-12 h-auto min-h-[550px] md:min-h-[300px] xl:h-[550px] box-border relative overflow-hidden bg-cover bg-center bg-no-repeat"
        >
          <div className="max-w-[1300px] w-full grid grid-cols-1 md:grid-cols-[1.3fr_0.6fr] gap-6 relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-white text-[1.6rem] lg:text-[1.8rem] xl:text-[2.5rem] font-light leading-[1.2] m-0 xl:max-w-[800px]">
                Nuestros Planes <br />
                <span className="cursive-txt text-[#FF9A00] text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem]">para conectarte siempre</span>
              </h1>
              <button className="btn-pill btn-pill--orange mt-[330px] md:mt-[40px]">
                <span className="btn-pill-text lowercase">conoce nuestros planes</span>
                <span className="btn-pill-icon">❯</span>
              </button>
            </div>
          </div>
        </section>
        <Planes />
      </div>
      <Footer />
    </>
  );
};

export default PlanesView;
