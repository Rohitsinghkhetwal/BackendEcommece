import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
    },
    icon: {
        type: String,
    }
});

const Category = mongoose.model('categories', CategorySchema);
export default Category;