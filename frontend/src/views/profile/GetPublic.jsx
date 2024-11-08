import { getPublicationsByUser, deletePublication } from "../../services/publication.service.js";
import { useEffect, useState } from "react";

export const GetPublic = () => {
    const [publications, setPublications] = useState([]);

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

    return (
        <>
            <div className="flex flex-col-reverse p-10 gap-5 w-full  items-center  ">
                {publications.map((pub) => (
                    <article className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 mb-4 bg-white dark:bg-gray-800 shadow-md w-6/12"
                        key={pub._id}>
                        <h1>{pub.author}</h1>
                        <p>{pub.description}</p>
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
                        <div>

                        </div>
                        <br />
                        <div className="flex items-center  justify-center rounded-xl bg-red-500 w-4">

                            <button className="" onClick={(e) => handleDeletePub(e, pub._id)}>Borrar publicacion</button>

                        </div>
                    </article>
                ))}
            </div>
        </>
    );
};
