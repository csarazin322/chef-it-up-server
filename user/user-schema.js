import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    userRole: { type: ['CONSUMER', 'CHEF'], required: true },
    likedRecipesIds: { type: [String], default: [] },
    chefsFollowingIds: { type: [String], default: [] }
}, { collection: 'recipe-users' })

export default userSchema;