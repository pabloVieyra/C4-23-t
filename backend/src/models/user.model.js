import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        set: (value) => {
            return bcrypt.hashSync(value, 10);
        },
        required: true
    },
    })

export const User = mongoose.model('User', userSchema);