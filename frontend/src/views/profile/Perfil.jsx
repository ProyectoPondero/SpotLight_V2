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
      <div className="flex justify-center ">
        <main className="flex justify-center bg-gray-200 min-h-screen w-screen">
          <div className="container mx-auto p-4 mt-28">
            <section className="bg-white shadow-2xl rounded-lg overflow-hidden dark:bg-gray-900">
              <div className="sticky">
                <div className="p-2 flex justify-center items-center -bottom-12">
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg dark:bg-white border-2">
                    <img className="w-full h-full"
                      src={
                        profile?.avatar
                          ? profile.avatar.url
                          : "https://via.placeholder.com/150"
                      }
                      alt="Foto de perfil"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3 p-1 dark:bg-gray-900 ">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {profile?.name}
                  </h3>
                  <p className="text-black mt-2 dark:text-white">
                    {profile?.description}
                  </p>
                </div>
                <div className="mt-8 flex flex-col md:flex-row justify-evenly">
                  <ul className="text-gray-700 space-y-4 md:w-1/2 dark:bg-gray-900 dark:text-white bg-white p-6 rounded-lg">
                    <li className="flex items-center">
                      <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                      <span>Dirección: {profile?.address}</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-phone-alt mr-2 text-green-500"></i>
                      <span>Teléfono: {profile?.phoneNumber}</span>
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-envelope mr-2 text-purple-500"></i>
                      <span>Email: {profile?.email}</span>
                    </li>
                  </ul>
                  <div className="p-4">
                    <h2 className="dark:text-white">Editar información</h2>
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      Editar Perfil
                    </button>
                  </div>
                </div>
                <ModalPerfil profile={profile} />
                <SocialLink />
              </div>
            </section>
            <GetPublic />
          </div>
        </main>
      </div>
    </>
  );
};
