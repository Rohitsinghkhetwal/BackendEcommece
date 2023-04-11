import Order from "../Model/OrderSchema.js";
import OrderItem from "../Model/Order-ItemsSchema.js";

export const GetOrders = async (req, resp) => {
  try {
    const result = await Order.find({});
    resp.status(200).send(result);
  } catch (err) {
    resp.status(500).json({ message: "Something went wrong....." });
    throw err;
  }
};

// For sending the order id we need to create a function







  