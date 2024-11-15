import { useEffect } from "react";
import { Header } from "../../components/Header";
import { ModalPerfil } from "./ModalPerfil";
import { SocialLink } from "./SocialLink";
import { useProfile } from "../../contexts/profile/profileContext.jsx";
import GetPublic from "./GetPublic.jsx";

export const Perfil = () => {
  const { state: { profile }, getProfileData } = useProfile();

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto mt-24 space-y-8">
            <section className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,0,0,0.1)]">
              {/* Profile Header with Background & Avatar */}
              <div className="h-52 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20fill%3D%22%23fff%22%20opacity%3D%22.1%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3C%2Fsvg%3E')] opacity-20"></div>
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 p-20 ">
                  <div className="w-32 h-32 rounded-full ring-4 ring-white dark:ring-gray-700 overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]  ">
                    <img
                      className="w-full h-full object-cover "
                      src={profile?.avatar?.url || "https://via.placeholder.com/150"}
                      alt="Foto de perfil"
                    />
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="pt-20 px-8 pb-8">
                <div className="text-center mb-10">
                  <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    {profile?.name}
                  </h1>
                  <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    {profile?.description}
                  </p>
                </div>

                {/* Contact Info & Edit Section */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 space-y-5 backdrop-blur-sm shadow-lg">
                    <div className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
                        <i className="fas fa-map-marker-alt text-blue-600 dark:text-blue-400"></i>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{profile?.address || 'No disponible'}</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-800/30 transition-colors">
                        <i className="fas fa-phone-alt text-green-600 dark:text-green-400"></i>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{profile?.phoneNumber || 'No disponible'}</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30 transition-colors">
                        <i className="fas fa-envelope text-purple-600 dark:text-purple-400"></i>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{profile?.email || 'No disponible'}</span>
                    </div>
                  </div>

                  {/* Edit Section */}
                  <div className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm shadow-lg">
                    <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                      Editar información
                    </h2>
                    <button
                      onClick={() => document.getElementById("my_modal_2").showModal()}
                      className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    >
                      <span className="flex items-center space-x-2">
                        <i className="fas fa-pencil-alt text-sm transform group-hover:rotate-12 transition-transform"></i>
                        <span>Editar Perfil</span>
                      </span>
                      <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                  </div>
                </div>

                {/* Social Links & Modal */}
                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <SocialLink />
                </div>
                <ModalPerfil profile={profile} />
              </div>
            </section>

            {/* Public Content */}
            <GetPublic />
          </div>
        </main>
      </div>
    </>
  );
};