import userModel from "./user-model.js";

export const findUsers = () => userModel.find();
export const findUserById = (_id) => userModel.findById(_id);
export const findConsumers = () => userModel.find({ userRole: 'CONSUMER' });
export const findChefs = () => userModel.find({ userRole: 'CHEF' });
export const createUser = (user) => userModel.create(user);
export const deleteUser = (_id) => userModel.deleteOne({ _id });
export const updateUser = (_id, user) => userModel.updateOne({ _id }, { $set: user });
