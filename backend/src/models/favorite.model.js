import { Schema, model } from "mongoose";

const favoriteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    publicationId: {
        type: Schema.Types.ObjectId,
        ref: "publication",
        require: true
    }
})

export const favoriteModel = model("Favorite", favoriteSchema)