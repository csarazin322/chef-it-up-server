import userModel from "./user-model.js";

export const findUsers = async () => {
    const users = await userModel.find();
    return users;
}

export const findUserById = async (_id) => {
    const user = await userModel.findById(_id).catch((error) => 404)
    return user
}

export const findUserByUsername = async (username) => {
    const user = await userModel.findOne({ username }).catch((error) => 404)
    return user
};

export const findConsumers = async () => {
    const consumers = await userModel.find({ userRole: 'CONSUMER' })
    return consumers
}

export const findChefs = async () => {
    const chefs = await userModel.find({ userRole: 'CHEF' })
    return chefs
}

export const createUser = async (user) => {
    const newUser = await userModel.create(user).catch((error) => 409)
    return newUser
};

export const deleteUser = async (_id) => {
    const status = await userModel.deleteOne({ _id }).catch((error) => {
        console.log(error)
        return 404
    });
    return status
}

export const updateUser = async (_id, user) => {
    const status = await userModel.updateOne({ _id }, user).catch((error) => 404)
    return status
}

export const findUserByCredentials = async ({ username, password }) => {
    const user = await userModel.findOne({ username, password })
    return user
};