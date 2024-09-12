import React from 'react'

export const Perfil = () =>{
  return (
    <div className="container mx-auto p-4 mt-">
      <section className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="relative button">
          <div className="h-48 bg-blue-500"></div>
          <div className="absolute inset-0 flex justify-center items-center -bottom-12">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
              <img src="../assets/img/spot.png" alt="Perfil" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mt-16 p-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800">Emilio Joaquin Ortiz Malich</h3>
            <p className="text-gray-600 mt-2">
              Soy un joven de 18 años con la intención de mostrar mi talento en mi deporte favorito. Me desempeño bien
              jugando al fútbol con mis compañeros. Espero poder encontrar a una persona que me ayude a explotar mi
              potencial.
            </p>
          </div>

          {/* Info */}
          <div className="mt-8 flex flex-col md:flex-row justify-between">
            <ul className="text-gray-700 space-y-4 md:w-1/2">
              <li><i className="fas fa-map-signs mr-2"></i> Dirección: San Hilario, Formosa, Argentina</li>
              <li><i className="fas fa-phone-alt mr-2"></i> Teléfono: 3704040642</li>
              <li><i className="fas fa-briefcase mr-2"></i> Trabaja en: Desocupado</li>
              <li><i className="fas fa-building mr-2"></i> Cargo: Ninguno</li>
            </ul>
            <ul className="text-gray-700 space-y-4 md:w-1/2 mt-4 md:mt-0">
              <li><i className="fas fa-map-marker-alt mr-2"></i> Ubicación: Formosa</li>
              <li><i className="fas fa-calendar-alt mr-2"></i> Fecha de nacimiento: 12/07/2005</li>
              <li><i className="fas fa-user-check mr-2"></i> Registro: El día 20/05/2024</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mt-8 flex justify-center space-x-4">
            <a href="https://www.facebook.com/emiliojoaquin.ortizmalich" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://x.com/Emilio_joa_16" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/emilio_joaquin_13/" target="_blank" rel="noreferrer" className="text-pink-600 hover:text-pink-800">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


