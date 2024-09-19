import React from "react";

export const Perfil = () => {
  const infoList = [
    {
      icon: "fas fa-map-marker-alt",
      color: "text-blue-500",
      label: "Dirección",
      value: "San Hilario, Formosa, Argentina",
    },
    {
      icon: "fas fa-phone-alt",
      color: "text-green-500",
      label: "Teléfono",
      value: "3704040642",
    },
    {
      icon: "fas fa-briefcase",
      color: "text-yellow-500",
      label: "Trabaja en",
      value: "Desocupado",
    },
    {
      icon: "fas fa-building",
      color: "text-red-500",
      label: "Cargo",
      value: "Ninguno",
    },
    {
      icon: "fas fa-envelope",
      color: "text-purple-500",
      label: "Email",
      value: "ejemplo@correo.com",
    },
    {
      icon: "fas fa-globe",
      color: "text-indigo-500",
      label: "Sitio web",
      value: "www.ejemplo.com",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/emiliojoaquin.ortizmalich",
      icon: "fab fa-facebook-f",
      color: "text-blue-600",
      hoverColor: "hover:text-blue-800",
    },
    {
      href: "https://x.com/Emilio_joa_16",
      icon: "fab fa-twitter",
      color: "text-blue-500",
      hoverColor: "hover:text-blue-700",
    },
    {
      href: "https://www.instagram.com/emilio_joaquin_13/",
      icon: "fab fa-instagram",
      color: "text-pink-600",
      hoverColor: "hover:text-pink-800",
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-28">
      {" "}
      {/* Ajuste de margen superior */}
      <section className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="sticky">
          <div className="p-14 flex justify-center items-center -bottom-12">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
              <img src="../assets/img/spot.png" alt="Perfil" />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mt-3 p-1">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800">
              Emilio Joaquin Ortiz Malich
            </h3>
            <p className="text-gray-600 mt-2">
              Soy un joven de 18 años con la intención de mostrar mi talento en
              mi deporte favorito. Me desempeño bien jugando al fútbol con mis
              compañeros. Espero poder encontrar a una persona que me ayude a
              explotar mi potencial.
            </p>
          </div>

          {/* Info */}
          <div className="mt-8 flex flex-col md:flex-row justify-between">
            <ul className="text-gray-700 space-y-4 md:w-1/2 bg-white p-6 rounded-lg shadow-md">
              {infoList.map((info, index) => (
                <li key={index} className="flex items-center">
                  <i className={`${info.icon} mr-2 ${info.color}`}></i>
                  <span>{`${info.label}: ${info.value}`}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="mt-8 flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`${link.color} ${link.hoverColor}`}
              >
                <i className={`${link.icon} text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
