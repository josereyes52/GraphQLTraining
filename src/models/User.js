import { Schema, model } from "mongoose";

const userSchema = new Schema({
    firstname:{
        type: String,
        require: true
    },
    lastname: String,
    age: Number
});

export default model('User', userSchema);