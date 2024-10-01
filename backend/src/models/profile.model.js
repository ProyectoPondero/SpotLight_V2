import { Schema, model } from 'mongoose';

const profileSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        require: true
    }
});

export const profileModel = model('Profile', profileSchema);