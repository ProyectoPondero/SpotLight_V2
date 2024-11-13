import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const About = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-slate-200 dark:bg-gray-600 ">
        <div className="w-full max-w-4xl p-4">
          <section className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800 mt-20">
            <h1 className="font-bold text-4xl text-center mb-4 dark:text-white">
              Un poco sobre nosotros...
            </h1>
            <div className="flex justify-center">
              <div className="w-1/2">
                <p className="text-center text-lg mt-4 dark:text-white">
                  Somos una empresa que se dedica a la creación de aplicaciones
                  web y móviles, con el fin de facilitar la vida de las
                  personas. Nuestro objetivo es que nuestros clientes tengan una
                  experiencia agradable y sencilla al utilizar nuestras
                  aplicaciones.
                </p>
                <p className="text-center text-lg mt-4 dark:text-white">
                  SpotLight es una aplicación web que permite a los usuarios
                  subir contenidos con la intencion de hacerse ver, formar
                  grupos o tambien tener la posibilidad de ser contratados por
                  empresas que buscan talento. Nuestra objetivo es que nosotros
                  ayudemos a que las personas sean más felices y productivas.
                </p>
              </div>
            </div>
            <h2 className="font-bold text-2xl text-center mt-8 dark:text-white">
              Nuestro equipo
            </h2>
            <div className="flex flex-wrap justify-center mt-8 space-x-4">
              <div>
                <img
                  src="/src/assets/images/EMILIO.png"
                  alt="Emilio"
                  className="rounded-full w-32 h-32 object-cover sm:w-40 sm:h-40 md:w-48 md:h-48 p-2"
                />
                <br />
                <p className="text-center font-bold rounded-xl shadow-sm border-2 hover:scale-110 transition duration-300 dark:text-white">
                  <a href="https://www.instagram.com/emilio_joaquin_13/">
                    Ortiz Emilio
                  </a>
                </p>
              </div>

              <div>
                <img
                  src="/src/assets/images/CRIS.png"
                  alt="Cris"
                  className="rounded-full w-32 h-32 object-cover sm:w-40 sm:h-40 md:w-48 md:h-48 p-2"
                />
                <br />
                <p className="text-center font-bold rounded-xl shadow-sm border-2 hover:scale-110 transition duration-300 dark:text-white">
                  <a href="https://www.instagram.com/cris_de_crisis/">
                    Gonzales Cristian
                  </a>
                </p>
              </div>

              <div>
                <img
                  src="/src/assets/images/MARCE.png"
                  alt="Marce"
                  className="rounded-full w-32 h-32 object-cover sm:w-40 sm:h-40 md:w-48 md:h-48 p-2"
                />
                <br />
                <p className="text-center font-bold rounded-xl shadow-sm border-2 hover:scale-110 transition duration-300 dark:text-white">
                  <a href="https://www.instagram.com/marcelo_ortega22/">
                    Ortega Marcelo
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
