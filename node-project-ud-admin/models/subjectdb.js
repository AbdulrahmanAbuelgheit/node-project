import { Schema, model } from "mongoose";

const subjectdb = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    pre: {
        type: String,
        required: false,
    },
    department: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default model('subject', subjectdb);


