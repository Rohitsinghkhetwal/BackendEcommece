import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    orderItems: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        required: true
    },
    ShippingAddress1: {
        type: String,
        required: true
    },
    ShippingAddress2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    zip : {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'pending'
    },
    totalPrice: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    dateOrder: {
        type: Date,
        default: Date.now
    }

})

const Order = mongoose.model('Order', OrderSchema);
export default Order;