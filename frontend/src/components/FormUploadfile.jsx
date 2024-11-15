import { useState } from 'react';
import { uploadPublication } from '../services/publication.service.js';

export default function FormUploadfile({ onNewPublication }) {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        setLoading(true);

        try {
            const data = await uploadPublication(formData);
            onNewPublication(data); // Notifica al componente padre
        } catch (error) {
            console.error('Error al realizar la publicación:', error);
        } finally {
            setLoading(false);
            setCategory('');
            setTitle('');
            setDescription('');
            setFile(null);

        }
    };

    return (
        <form
            className="bg-gray-200 dark:bg-gray-800 shadow-2xl rounded px-4 pt-6 pb-2 w-auto xl:w-9/12 md:w-9/12 flex flex-col"
            onSubmit={handleSubmit}
        >
            {/* Campos de título y descripción */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Título"
                    className="shadow border rounded w-full py-2 px-3 text-black dark:text-white bg-white dark:bg-gray-700 font-bold leading-tight focus:outline-none focus:ring focus:ring-red-500 mb-4"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Descripción"
                    className="shadow border rounded w-full py-2 px-3 text-black dark:text-white bg-white dark:bg-gray-700 font-bold leading-tight focus:outline-none focus:ring focus:ring-red-500"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {/* Dropdown para seleccionar categoría */}
                <div className="mb-4 rounded-xl p-2">
                    <label
                        className="block font-bold mb-2 text-black dark:text-white"
                        htmlFor="category"
                    >
                        Seleccione una categoría
                    </label>
                    <select
                        id="category"
                        className="shadow border rounded w-full py-2 px-3 text-black dark:text-white bg-white dark:bg-gray-700 font-bold leading-tight focus:outline-none focus:ring focus:ring-red-500"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="default">.......</option>
                        <option value="Tecnología">Tecnología</option>
                        <option value="Deportes">Deportes</option>
                        <option value="Educación">Educación</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Ciencias">Ciencias</option>
                        <option value="Música">Música</option>
                        <option value="Sociales">Sociales</option>
                    </select>
                </div>
                {/* Input de archivo */}
                <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </div>
            <div className="flex justify-between items-center">
                <label
                    htmlFor="file-upload"
                    className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded cursor-pointer shadow transition duration-200"
                >
                    {file ? file.name : 'Añadir archivo'}
                </label>
                <button
                    type="submit"
                    className="bg-red-500 text-white px-4 py-2 rounded flex items-center justify-center hover:bg-red-400 disabled:bg-red-300 transition duration-200"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <svg
                                className="animate-spin h-5 w-5 mr-2 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8H4z"
                                ></path>
                            </svg>
                            Publicando...
                        </>
                    ) : (
                        "Publicar"
                    )}
                </button>
            </div>
        </form>
    );
}
