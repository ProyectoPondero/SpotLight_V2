import { deleteFavorites } from "../services/favorite.service";




export const handleDeleteFavorites = async (e, publicationId) => {
    e.preventDefault()

    const DeleteFavorite = async (e, publicationId) => {
        e.preventDefault()
        try {
            const response = await deleteFavorites(publicationId)
            console.log("Respuesta del servidor:", response);
            return { publicationId }
        } catch (error) {
            console.log("Error al borrar la publicación")
        }
    }

    return { DeleteFavorite, publicationId }
}