import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

export const userModel = model('User', userSchema);