import { Schema, model } from "mongoose";

const subjectdb = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: false,
    },
}, { timestamps: true });

export default model('subject', subjectdb);


