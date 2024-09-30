import { Schema, model } from "mongoose";

const publicationSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    user: {
        type: String,
        require: true
    },
    public_id: {
        type: String,
        require: true
    },
    secure_url: {
        type: String,
        require: true
    }
});

export const publicationModel = model('publication', publicationSchema);