import express from 'express';
import { CreateProducts,  GetallProducts,getById, getfewvalue } from '../controller/ProductsController.js';


const GetProductRoute = express.Router();

GetProductRoute.route("/v1").post(CreateProducts);
GetProductRoute.route("/").get(GetallProducts);
GetProductRoute.route('/getbyId/:id').get(getById)
GetProductRoute.route('/getfew').get(getfewvalue)
// GetProductRoute.route('/update/:id').put(updateWithId)
// GetProductRoute.route('/delete/:id').delete(DeleteProductId)
// GetProductRoute.route('/count').get(countD)
// filtering the data
// GetProductRoute.route('/filter').get(filteringData)

export default GetProductRoute;