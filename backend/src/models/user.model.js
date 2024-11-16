import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    online: {
        type: Boolean,
        default: false,
    },
});

userSchema.methods.toJSON = function () {
    const { __v, password, ...object } = this.toObject();
    return object;
};

export const userModel = model('User', userSchema);