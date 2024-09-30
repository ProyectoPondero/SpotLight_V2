import { useState } from "react";
import { uploadPublication } from "../services/publication.service.js";

export default function FormUploadfile() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <>
            <form
                className=" dark:bg-gray-800 shadow-2xl rounded px-8 pt-6 pb-8 mb-4 w-4/5"
                onSubmit={async (e) => {
                    e.preventDefault();

                    const formData = new FormData();
                    formData.append('file', file);
                    formData.append('title', title);
                    formData.append('description', description);

                    try {
                        const data = await uploadPublication(formData);
                        console.log(data);
                    } catch (error) {
                        console.error('Error al realizar la publicación:', error);
                    }
                }}
            >
                <div className="mb-4">
                    <input
                        type='text'
                        placeholder='Título'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                    <textarea
                        placeholder='Descripción'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                    <input
                        type='file'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                        onChange={(e) => {
                            setFile(e.target.files[0]);
                        }}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Publicar
                    </button>
                </div>
            </form>

        </>
    );
}