import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const About = () => {
  const teamMembers = [
    {
      name: "Ortiz Emilio",
      image: "/src/assets/images/EMILIO.png",
      instagramUrl: "https://www.instagram.com/emilio_joaquin_13/",
    },
    {
      name: "Gonzales Cristian",
      image: "/src/assets/images/CRIS.png",
      instagramUrl: "https://www.instagram.com/cris_de_crisis/",
    },
    {
      name: "Ortega Marcelo",
      image: "/src/assets/images/MARCE.png",
      instagramUrl: "https://www.instagram.com/marcelo_ortega22/",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-gray-700 dark:to-gray-800">
        <div className="container mx-auto max-w-4xl px-4 py-20">
          <section className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 dark:bg-gray-800/90">
            <h1 className="font-bold text-4xl text-center mb-12 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Un poco sobre nosotros...
            </h1>

            <div className="mx-auto max-w-2xl space-y-6">
              <p className="text-center text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Somos una empresa que se dedica a la creación de aplicaciones web y
                móviles, con el fin de facilitar la vida de las personas. Nuestro
                objetivo es que nuestros clientes tengan una experiencia agradable
                y sencilla al utilizar nuestras aplicaciones.
              </p>
              <p className="text-center text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                SpotLight es una aplicación web que permite a los usuarios subir
                contenidos con la intención de hacerse ver, formar grupos o también
                tener la posibilidad de ser contratados por empresas que buscan
                talento. Nuestro objetivo es que nosotros ayudemos a que las
                personas sean más felices y productivas.
              </p>
            </div>

            <div className="relative my-16">
              <h2 className="font-bold text-3xl text-center bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Nuestro equipo
              </h2>
              <div className="absolute w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 -bottom-4 left-1/2 transform -translate-x-1/2 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="group">
                  <div className="relative transition-transform duration-300 transform hover:scale-105">
                    <div className="overflow-hidden rounded-full border-4 border-white/10 shadow-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <a
                      href={member.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block"
                    >
                      <p className="text-center font-bold py-2 px-4 rounded-xl 
                        bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm
                        shadow-lg border border-white/20
                        transition-all duration-300
                        hover:shadow-xl hover:scale-105
                        text-gray-800 dark:text-white">
                        {member.name}
                      </p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};