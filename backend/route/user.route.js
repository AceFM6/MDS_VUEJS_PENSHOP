const Express = require('express');
const Router = Express.Router();

const UserController = require('../controller/user.controller');

Router.post('/register', UserController.create);

module.exports = Router;