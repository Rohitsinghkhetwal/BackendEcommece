import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },

    counterStock: {
        type: Number,
        required: true
    }
}) 

const Products= mongoose.model("users", userSchema);
export default Products;