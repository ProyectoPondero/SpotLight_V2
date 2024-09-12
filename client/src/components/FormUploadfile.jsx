import { useState } from "react";

export default function FormUploadfile() {
    const [file, setFile] = useState(null);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <form
                className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2"
                onSubmit={async (e) => {
                    e.preventDefault();

                    const formData = new FormData();
                    formData.append('img', file);

                    try {
                        const response = await fetch('http://localhost:3368/img/upload', {
                            method: 'POST',
                            body: formData,
                        });
                        const data = await response.json();
                        console.log(data);
                    } catch (error) {
                        console.error('Error al subir la imagen:', error);
                    }
                }}
            >
                <div className="mb-4">
                    <div className="text-white text-2xl font-bold text-center mb-6">Subir imagen</div>
                    <input
                        type='file'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}