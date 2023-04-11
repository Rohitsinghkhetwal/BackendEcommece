import mongoose from "mongoose";

const OrderItemsSchema = new mongoose.Schema({
    quantity: [{
        type: Number,
        required: true
    }],

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }
})

const OrderItem = mongoose.model('OrderItem', OrderItemsSchema);
export default OrderItem;

