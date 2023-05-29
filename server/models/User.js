import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    googleId: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    imageUrl: String,
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;
