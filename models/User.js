import mongoose from "mongoose";
import validator from 'validator';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        validate: {
            validator : validator.isEmail,
            message : 'please provide your email',
        },
        required: [true, 'please provide your email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        minlength: 6,
    },
    lastname: {
        type: String,
        maxlength: 20,
        trim: true,
        default : 'lastName',
    },
    location: {
        type: String,
        maxlength: 20,
        trim: true,
        default : 'my city',
    },
});

export default mongoose.model('User', UserSchema);