import * as userDao from './user-dao.js'

const createUser = async (req, res) => {
    console.log(req.body)
    const newUser = req.body;
    const insertedUser = await userDao.createUser(newUser);
    return (insertedUser == 409) ? res.sendStatus(409) : res.json(insertedUser);
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
    const user = await userDao.findUserById(idToFind)
    return (user === 404) ? res.sendStatus(404) : res.json(user)
}

const findByUsername = async (req, res) => {
    const usernameToFind = req.params.username
    const user = await userDao.findUserByUsername(usernameToFind)
    return (user === 404) ? res.sendStatus(404) : res.json(user)
}

const updateUser = async (req, res) => {
    const idToUpdate = req.params._id;
    const updates = req.body;
    const status = await userDao.updateUser(idToUpdate, updates)
    return (status === 404) ? res.sendStatus(404) : res.json(status)
}

const deleteUser = async (req, res) => {
    const idToDelete = req.params._id;
    const status = await userDao.deleteUser(idToDelete)
    return (status === 404) ? res.sendStatus(404) : res.json(status)
}

const profile = async (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
        res.sendStatus(404);
        return;
    }
    res.send(currentUser);
};

const login = async (req, res) => {
    const userCreds = req.body
    const user = await userDao.findUserByCredentials(userCreds);
    if (user) {
        req.session["currentUser"] = user;
        res.json(user);
    } else {
        res.sendStatus(401);
    }
};

const logout = async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
};


export default (app) => {
    app.post('/api/users/login', login)
    app.post('/api/users/logout', logout)
    app.get('/api/users/profile', profile)
    app.post('/api/users', createUser)
    app.post('/api/users/register', createUser)
    app.get('/api/users', findUsers)
    app.get('/api/users/:_id', findUserById)
    app.get('/api/users/username/:username', findByUsername)
    app.get('/api/users/chefs', findChefs)
    app.get('/api/users/consumers', findConsumers)
    app.put('/api/users/:_id', updateUser)
    app.delete('/api/users/:_id', deleteUser)
}