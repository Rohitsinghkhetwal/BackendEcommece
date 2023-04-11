import Products from "../Model/UserModel.js";

export const sendItems = async(req, resp) => {
    try{
        const {name, image, counterStock} = req.body;
        const items = await Products.create({
            name, 
            image,
            counterStock
        })
        console.log(req.body);
        
        return resp.status(200).send(items);
       

    }catch(err) {
        console.log("something went wrong.......");
        return resp.status(400).json({err: "error in logging."})
    }

}

export const getItems = async (req, resp) => {
    try{
        const items = await Products.find({});
        return resp.status(200).send(items)

    }catch(err) {
        console.log("err while getting the products.....");
        return resp.status(400).json({err: "Something went wrong!"})
    }

}
