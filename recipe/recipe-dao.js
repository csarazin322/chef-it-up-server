import recipeModel from "./recipe-model.js";

export const findRecipes = async () => await recipeModel.find();
export const findRecipeById = async (_id) => await recipeModel.findById(_id).catch((error) => 404)
export const createRecipe = async (recipe) => await recipeModel.create(recipe).catch((error) => 409)
export const deleteRecipe = async (_id) => await recipeModel.deleteOne({ _id })
export const updateRecipe = async (_id, recipe) => await recipeModel.updateOne({ _id }, { $set: recipe })