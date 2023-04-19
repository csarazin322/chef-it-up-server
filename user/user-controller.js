import * as userDao from './user-dao.js'

const createUser = async (req, res) => {
    const newUser = req.body;
    const insertedUser = await userDao.createUser(newUser);
    res.json(insertedUser);
}

const findUsers = async (req, res) => {
    const users = await userDao.findUsers();
    res.json(users)
}

const findConsumers = async (req, res) => {
    const consumers = await userDao.findConsumers();
    res.json(consumers)
}

const findChefs = async (req, res) => {
    const chefs = await userDao.findChefs();
    res.json(chefs)
}

const findUserById = async (req, res) => {
    const idToFind = req.params._id;
    const user = await userDao.findUserById(idToFind);
    (user === null) ? res.status(404) : res.json(user)
}

const updateUser = async (req, res) => {
    const idToUpdate = req.params._id;
    const updates = req.body;
    const status = await userDao.updateUser(idToUpdate, updates);
    res.json(status)
}

const deleteUser = async (req, res) => {
    const idToDelete = req.params._id;
    const status = await userDao.deleteUser(idToDelete);
    res.json(status)
}


export default (app) => {
    app.post('/api/users', createUser)
    app.get('/api/users', findUsers)
    app.get('/api/users/"_id', findUserById)
    app.get('/api/users/chefs', findChefs)
    app.get('/api/users/consumers', findConsumers)
    app.put('/api/users/:_id', updateUser)
    app.delete('/api/users/:_id', deleteUser)
}