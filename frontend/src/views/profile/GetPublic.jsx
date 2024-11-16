import React, { useState, useEffect } from 'react';
import { getPublicationsByUser, deletePublication } from "../../services/publication.service.js";
import { useProfile } from '../../contexts/profile/profileContext.jsx';

const GetPublic = () => {
    const [publications, setPublications] = useState([]);
    const [editingPublication, setEditingPublication] = useState(null);
    const [editData, setEditData] = useState({ title: '', description: '' });
    const { state: { profile }, getProfileData } = useProfile();

    useEffect(() => {
        getProfileData();
    }, []);

    const getPublications = async () => {
        try {
            const response = await getPublicationsByUser();
            setPublications(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getPublications();
    }, []);

    const handleDeletePub = async (e, publicationId) => {
        e.preventDefault();
        try {
            await deletePublication(publicationId);
            setPublications(prevPublications =>
                prevPublications.filter(pub => pub._id !== publicationId)
            );
        } catch (error) {
            console.error(error);
        }
    };

    const startEditing = (publication) => {
        setEditingPublication(publication._id);
        setEditData({ title: publication.title, description: publication.description });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdatePub = async (e, publicationId) => {
        e.preventDefault();

        let formData = new FormData();
        let data = {
            description: editData.description,
            title: editData.title,
        }
        fetch('http://localhost:3368/publication/' + publicationId, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        }
        ).then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
            .then((res) => {
                getPublications();
                setEditingPublication(null);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <div className="space-y-6">
                {publications.map((pub) => (
                    <article
                        key={pub._id}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl dark:shadow-gray-900/30"
                    >
                        {editingPublication === pub._id ? (
                            <form onSubmit={(e) => handleUpdatePub(e, pub._id)} className="p-6 space-y-4">
                                <input
                                    type="text"
                                    name="title"
                                    value={editData.title}
                                    onChange={handleEditChange}
                                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                                    placeholder="Título"
                                />
                                <textarea
                                    name="description"
                                    value={editData.description}
                                    onChange={handleEditChange}
                                    className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 min-h-[100px]"
                                    placeholder="Descripción"
                                />
                                <div className="flex gap-3">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        type="button"
                                        className="px-6 py-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-xl hover:from-gray-500 hover:to-gray-600 transition-all duration-200 shadow-md hover:shadow-lg"
                                        onClick={() => setEditingPublication(null)}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="flex flex-col">
                                <div className="p-6">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                                            {profile.name.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-200 font-medium">
                                            @{profile.name}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {pub.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {pub.description}
                                    </p>
                                </div>

                                <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-900">
                                    {pub.secure_url.match(/.(mp4|webm|ogg|ogv)$/i) ? (
                                        <video
                                            src={pub.secure_url}
                                            controls
                                            className="w-full h-full object-cover"
                                        >
                                            Tu navegador no soporta el video.
                                        </video>
                                    ) : (
                                        <img
                                            className="w-full h-full object-cover"
                                            src={pub.secure_url}
                                            alt={pub.title}
                                        />
                                    )}
                                </div>

                                <div className="p-6 bg-gray-50 dark:bg-gray-800/50">
                                    <div className="flex justify-center gap-4">
                                        <button
                                            onClick={() => startEditing(pub)}
                                            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg flex-1 max-w-[150px]"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={(e) => handleDeletePub(e, pub._id)}
                                            className="px-6 py-2 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-xl hover:from-red-600 hover:to-rose-700 transition-all duration-200 shadow-md hover:shadow-lg flex-1 max-w-[150px]"
                                        >
                                            Borrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
};

export default GetPublic;