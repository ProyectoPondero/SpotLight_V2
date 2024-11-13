import React from 'react'

export const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
                <span className="text-white">Cargando...</span>
            </div>
        </div>
    )
}