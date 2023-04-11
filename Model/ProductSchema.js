import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    richdiscription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''

    },
    images: [{
        type: String,
    }],
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        default: ''
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 300
    },
    rating: {
        type: Number,
        default: ''
    },
    numReviews: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
})

const Product = mongoose.model('Product', ProductSchema);

export default Product