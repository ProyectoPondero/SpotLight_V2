import React, { useState } from "react";
import { Header } from "../../components/Header";

export const Perfil = () => {
    const getInitialInfo = () => {
        const savedInfo = localStorage.getItem("userInfo");
        return savedInfo
            ? JSON.parse(savedInfo)
            : {
                direccion: "San Hilario, Formosa, Argentina",
                telefono: "3704040642",
                email: "ejemplo@correo.com",
                fotoPerfil: "",
            };
    };

    const [info, setInfo] = useState(getInitialInfo);
    const [imagePreview, setImagePreview] = useState(info.fotoPerfil);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => {
            const updatedInfo = { ...prevInfo, [name]: value };
            localStorage.setItem("userInfo", JSON.stringify(updatedInfo));
            return updatedInfo;
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                setInfo((prevInfo) => {
                    const updatedInfo = { ...prevInfo, fotoPerfil: base64Image };
                    localStorage.setItem("userInfo", JSON.stringify(updatedInfo));
                    return updatedInfo;
                });
                setImagePreview(base64Image);
            };
            reader.readAsDataURL(file);
        }
    };

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
        <>
            <Header />
            <div className="flex justify-center">
                <main className="flex justify-center bg-gray-200 min-h-screen w-screen">
                    <div className="container mx-auto p-4 mt-28">
                        <section className="bg-white shadow-2xl rounded-lg overflow-hidden dark:bg-gray-900">
                            <div className="sticky">
                                <div className="p-2 flex justify-center items-center -bottom-12">
                                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg dark:bg-white border-2">
                                        <img
                                            src={imagePreview || "../assets/img/spot.png"}
                                            alt="Foto de perfil"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3 p-1 dark:bg-gray-900">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                        {info.nombre || "Nombre por defecto"}
                                    </h3>
                                    <p className="text-black mt-2 dark:text-white">
                                        {info.descripcion || "Descripción por defecto"}
                                    </p>
                                </div>
                                <div className="mt-8 flex flex-col md:flex-row justify-evenly">
                                    <ul className="text-gray-700 space-y-4 md:w-1/2 dark:bg-gray-900 dark:text-white bg-white p-6 rounded-lg">
                                        <li className="flex items-center">
                                            <i className="fas fa-map-marker-alt mr-2 text-blue-500"></i>
                                            <span>Dirección: {info.direccion}</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-phone-alt mr-2 text-green-500"></i>
                                            <span>Teléfono: {info.telefono}</span>
                                        </li>
                                        <li className="flex items-center">
                                            <i className="fas fa-envelope mr-2 text-purple-500"></i>
                                            <span>Email: {info.email}</span>
                                        </li>
                                    </ul>
                                    <div className="p-4">
                                        <h2 className="dark:text-white">Editar información</h2>
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded"
                                            onClick={() => document.getElementById('my_modal_2').showModal()}
                                        >
                                            Editar Perfil
                                        </button>
                                    </div>
                                </div>
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box bg-white dark:bg-gray-800 border dark:border-gray-700 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg relative">

                                        <h3 className="font-bold text-lg mb-4">Editar Perfil</h3>
                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Nombre:</label>
                                                <input
                                                    type="text"
                                                    name="nombre"
                                                    value={info.nombre || ""}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Descripción:</label>
                                                <input
                                                    type="text"
                                                    name="descripcion"
                                                    value={info.descripcion || ""}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Dirección:</label>
                                                <input
                                                    type="text"
                                                    name="direccion"
                                                    value={info.direccion}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Teléfono:</label>
                                                <input
                                                    type="text"
                                                    name="telefono"
                                                    value={info.telefono}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Email:</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={info.email}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Foto de perfil:</label>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                    className="w-full border rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                />
                                            </div>
                                        </form>
                                        <div className="mt-6 flex justify-end space-x-2">
                                            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200" onClick={() => document.getElementById('my_modal_2').close()}>
                                                Cancelar
                                            </button>
                                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200" onClick={() => document.getElementById('my_modal_2').close()}>
                                                Guardar
                                            </button>
                                        </div>
                                    </div>
                                </dialog>
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
                </main>
            </div>
        </>
    );
};