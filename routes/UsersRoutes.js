import express from 'express';
import { GetUsers, Login, createUser, getById } from '../controller/UsersControllers.js';



const UsersRoutes = express.Router();
UsersRoutes.route('/createUser').post(createUser);
UsersRoutes.route('/').get(GetUsers);
UsersRoutes.route('/getuser/:id').get(getById);
UsersRoutes.route('/login').post(Login)

export default UsersRoutes;