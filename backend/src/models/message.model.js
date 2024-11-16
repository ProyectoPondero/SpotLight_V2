import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

messageSchema.methods.toJSON = function () {
    const { __v, ...object } = this.toObject();
    return object;
};

export const messageModel = model('Message', messageSchema);