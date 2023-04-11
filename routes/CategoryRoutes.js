import express from "express";
import { DeleteCategory, FindcategoryByID, getCategory, sendCategory, updateData } from "../controller/CategoryController.js";

const CategoryRouter = express.Router();

CategoryRouter.route("/").get(getCategory);
CategoryRouter.route("/sendCategory").post(sendCategory);
CategoryRouter.route("/deleteCategory/:id").delete(DeleteCategory);
CategoryRouter.route("/findById/:id").get(FindcategoryByID);
CategoryRouter.route("/updateData/:id").put(updateData);
export default CategoryRouter;