import express from 'express';
import { GetOrders } from '../controller/Order-Controller.js';

const OrderRoutes = express.Router();

OrderRoutes.route('/').get(GetOrders);

export default OrderRoutes;