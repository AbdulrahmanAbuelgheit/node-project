import { Schema, model } from "mongoose";

const studentAccountdb = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    acadimicNumber: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

export default model('studentAccount', studentAccountdb);

