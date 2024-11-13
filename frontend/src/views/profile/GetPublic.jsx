import React, { useState, useEffect } from 'react';
import { getPublicationsByUser, deletePublication } from "../../services/publication.service.js";

const GetPublic = () => {
    const [publications, setPublications] = useState([]);
    const [editingPublication, setEditingPublication] = useState(null);
    const [editData, setEditData] = useState({ title: '', description: '' });

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
        ).then((res) => res.json()).then((data) => console.log(data)).catch((err) => console.log(err))
        // try {
        //     await modifyPublication(publicationId, formData);
        //     setEditingPublication(null);
        //     setEditData({ title: '', description: '' });
        // } catch (error) {
        //     console.error('Error updating publication:', error);
        // }
    };

    return (
        <div className="flex flex-col-reverse p-10 gap-5 w-full items-center">
            {publications.map((pub) => (
                <article
                    className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4 bg-white dark:bg-gray-800 shadow-md w-6/12"
                    key={pub._id}
                >
                    {editingPublication === pub._id ? (
                        <form onSubmit={(e) => handleUpdatePub(e, pub._id)}>
                            <input
                                type="text"
                                name="title"
                                value={editData.title}
                                onChange={handleEditChange}
                                className="w-full mb-2 p-2 border"
                                placeholder="Título"
                            />
                            <textarea
                                name="description"
                                value={editData.description}
                                onChange={handleEditChange}
                                className="w-full mb-2 p-2 border"
                                placeholder="Descripción"
                            />
                            <button type="submit" className="btn bg-green-500 border rounded-xl p-2 btn-primary">
                                Guardar
                            </button>
                            <button
                                type="button"
                                className="p-2 border rounded-xl bg-gray-400   ml-2"
                                onClick={() => setEditingPublication(null)}
                            >
                                Cancelar
                            </button>
                        </form>
                    ) : (
                        <>
                            <h1 className='font-bold dark:text-white '>{'@' + pub.author}</h1>
                            <h2 className='font-bold dark:text-white '>{pub.title}</h2>
                            <p className='font-bold dark:text-white '>{pub.description}</p>
                            {pub.secure_url.match(/.(mp4|webm|ogg|ogv)$/i) ? (
                                <video src={pub.secure_url} controls className="rounded-lg w-full">
                                    Tu navegador no soporta el video.
                                </video>

                            ) : (
                                <img
                                    className="rounded-lg w-full"
                                    src={pub.secure_url}

                                    alt={pub.title}
                                />
                            )}
                            <br />
                            <div className="flex w-full items-center justify-center rounded-xl gap-4">
                                <button
                                    className="border rounded-xl bg-green-500 p-1 w-3/12"
                                    onClick={() => startEditing(pub)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="p-1 w-3/12 rounded-xl bg-red-600"
                                    onClick={(e) => handleDeletePub(e, pub._id)}
                                >
                                    Borrar publicacion
                                </button>
                            </div>
                        </>
                    )}
                </article>
            ))}
        </div>
    );
};

export default GetPublic;
