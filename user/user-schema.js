import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    isChef: { type: Boolean, required: true },
    likedRecipesIds: { type: [String], default: [] },
    chefsFollowingIds: { type: [String], default: [] },
    createdRecipeIds: { type: [String] }
}, { collection: 'recipe-users' })

export default userSchema;