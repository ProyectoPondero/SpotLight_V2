import { Schema, model } from 'mongoose';

const profileSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    address: {
        type: String,
        require: false
    },
    phoneNumber: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    avatar: {
        type: String,
        require: false
    }
});

export const profileModel = model('Profile', profileSchema);