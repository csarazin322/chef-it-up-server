import userModel from "./user-model.js";

export const findUsers = async () => {
    const users = await userModel.find();
    return users;
}

export const findUserById = async (_id) => {
    const user = await userModel.findById({ _id: _id }).catch((error) => 404)
    return user
}

export const findUserByUsername = async (username) => {
    const user = await userModel.findOne({ username }).catch((error) => 404)
    return user
};

export const findConsumers = async () => {
    const consumers = await userModel.find({ isChef: false })
    return consumers
}

export const findChefs = async () => {
    const chefs = await userModel.find({ isChef: true })
    console.log('got here 3')
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
    console.log(user)
    const status = await userModel.findOneAndUpdate({ _id }, user, { new: true }).catch((error) => 404)
    return status
}

export const findUserByCredentials = async ({ username, password }) => {
    const user = await userModel.findOne({ username, password })
    return user
};