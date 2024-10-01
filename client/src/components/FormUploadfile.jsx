import { useState } from "react";
import { uploadPublication } from "../services/publication.service.js";

export default function FormUploadfile() {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <>
            <form
                className=" dark:bg-gray-800 bg-gray-200 shadow-2xl rounded px-4  pt-6 pb-2 w-auto xl:w-9/12 md:w-9/12  flex flex-col"
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
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black font-bold dark:bg-gray-100 leading-tight focus:outline-none focus:shadow-outline mb-4"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                    <textarea
                        placeholder='Descripción'
                        className="shadow appearance-none border rounded w-full py-2 px-3  dark:bg-gray-100 font-bold leading-tight focus:outline-none focus:shadow-outline mb-4"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />
                    <input 
                        type="file" 
                        id="file-upload" 
                        className="hidden"  // Cambiamos opacity-0 por hidden
                        onChange={(e) => {
                            setFile(e.target.files[0]);
                        }}
                    />

                    {/* Label como botón */}
                    <label 
                        htmlFor="file-upload" 
                        className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded cursor-pointer shadow transition duration-200 w-full text-center"
                    >
                        {file ? file.name : 'Images/videos'}
                    </label>
                    </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Publicar
                        
                    </button>
                </div>
            </form>

        </>
    );
}