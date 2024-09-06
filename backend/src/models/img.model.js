import { Schema, model } from "mongoose";

const imgSchema = new Schema({
    public_id: {
        type: String,
        require: true
    },
    secure_url: {
        type: String,
        require: true
    }
});

export const imgModel = model('Img', imgSchema);