import express  from "express";
import { getItems, sendItems } from "../controller/ProductController.js";

const productRouter = express.Router();

productRouter.route("/sendItems").post(sendItems);
productRouter.route("/showItems").get(getItems);

export default productRouter;