// src/components/FormUploadfile.jsx
import { useState } from 'react';
import { uploadPublication } from '../services/publication.service.js';

export default function FormUploadfile({ onNewPublication }) {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('description', description);

        try {
            const data = await uploadPublication(formData);
            
            // Notifica al componente padre sobre la nueva publicación
            onNewPublication(data);
        } catch (error) {
            console.error('Error al realizar la publicación:', error);
        }
    };

    return (
        <form
            className="dark:bg-gray-800 bg-gray-200 shadow-2xl rounded px-4 pt-6 pb-2 w-auto xl:w-9/12 md:w-9/12 flex flex-col"
            onSubmit={handleSubmit}
        >
            {/* El formulario para subir el archivo y detalles */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Título"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white font-bold bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Descripción"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-white font-bold bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </div>
            <div className="flex justify-between">
                <label
                    htmlFor="file-upload"
                    className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded cursor-pointer shadow transition duration-200"
                >
                    {file ? file.name : 'Añadir archivo'}
                </label>
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Publicar
                </button>
            </div>
        </form>
    );
}
