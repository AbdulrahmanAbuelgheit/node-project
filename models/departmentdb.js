import { Schema, model } from "mongoose";

const departmentdb = new Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: false,
    },
}, { timestamps: true });

export default model('department', departmentdb);


