import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header.jsx";
import { getProfile, modifyProfile } from "../../services/profile.service.js";

export const Perfil = () => {
    const [info, setInfo] = useState({
        direccion: "",
        telefono: "",
        email: "",
        fotoPerfil: "",
        nombre: "",
        descripcion: "",
    });

    // Estado temporal para los cambios del formulario
    const [tempInfo, setTempInfo] = useState({
        direccion: "",
        telefono: "",
        email: "",
        fotoPerfil: "",
        nombre: "",
        descripcion: "",
    });

    const [imagePreview, setImagePreview] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await getProfile();
                if (profileData) {
                    const safeProfileData = {
                        direccion: profileData.address || "",
                        telefono: profileData.phoneNumber || "",
                        email: profileData.email || "",
                        fotoPerfil: profileData.avatar || "",
                        nombre: profileData.name || "Nombre por defecto",
                        descripcion: profileData.description || "Descripción por defecto",
                    };
                    setInfo(safeProfileData);
                    setTempInfo(safeProfileData); // Inicializar tempInfo con los datos obtenidos
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleSave = async () => {
        try {
            await modifyProfile(tempInfo);
            // setInfo(tempInfo); // Actualizar info con los datos guardados
            setShowInfo(true); // Mostrar la información después de guardar
            document.getElementById('my_modal_2').close(); // Cerrar el modal
        } catch (error) {
            setError(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempInfo({ ...tempInfo, [name]: value });
    };

    return (
        <div>
            <Header />
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && showInfo && (
                <div>
                    <p>Dirección: {info.direccion}</p>
                    <p>Teléfono: {info.telefono}</p>
                    <p>Email: {info.email}</p>
                    <p>Nombre: {info.nombre}</p>
                    <p>Descripción: {info.descripcion}</p>
                    <img src={info.fotoPerfil} alt="Foto de perfil" />
                </div>
            )}
            <main>
                <div>
                    <section>
                        <dialog id="my_modal_2">
                            <div>
                                <input type="text" name="direccion" value={tempInfo.direccion} onChange={handleChange} placeholder="Dirección" />
                                <input type="text" name="telefono" value={tempInfo.telefono} onChange={handleChange} placeholder="Teléfono" />
                                <input type="email" name="email" value={tempInfo.email} onChange={handleChange} placeholder="Email" />
                                <input type="text" name="nombre" value={tempInfo.nombre} onChange={handleChange} placeholder="Nombre" />
                                <textarea name="descripcion" value={tempInfo.descripcion} onChange={handleChange} placeholder="Descripción"></textarea>
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200" onClick={() => document.getElementById('my_modal_2').close()}>
                                    Cancelar
                                </button>
                                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200" onClick={handleSave}>
                                    Guardar
                                </button>
                            </div>
                        </dialog>
                    </section>
                </div>
            </main>
        </div>
    );
};
