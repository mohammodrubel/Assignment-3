import { model, Schema } from "mongoose";
import { Tuser } from "./userInterface";
import isEmail from "validator/lib/isEmail";

const userModelSchema = new Schema<Tuser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        trim:true,
        required: true,
        validate: {
            validator: (value: string) => isEmail(value),
            message: '{VALUE} is not a valid email!', 
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 6, 
        maxlength: 20, 
    },
},{
    timestamps:true
});

export const User = model<Tuser>('User', userModelSchema);
