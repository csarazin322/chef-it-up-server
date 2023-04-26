import recipeModel from "./recipe-model.js";

export const findRecipes = () => recipeModel.find();
export const findRecipeById = (_id) => recipeModel.findById(_id).catch((error) => 404)
export const createRecipe = (recipe) => recipeModel.create(recipe)
export const deleteRecipe = (_id) => recipeModel.deleteOne({ _id })
export const updateRecipe = (_id, recipe) => recipeModel.updateOne({ _id }, { $set: recipe })