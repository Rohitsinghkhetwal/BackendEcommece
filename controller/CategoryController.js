import Category from "../Model/CategoryModel.js";

export const getCategory = async (req, resp) => {
  try {
    const categoryList = await Category.find({});
    if (!categoryList) {
      resp.status(500).send({ message: "Category not found" });
    }
    return resp.status(200).send(categoryList);
  } catch (err) {
    resp.status(401).send({ err: "Error in getting the category" });

    console.log("Error in getting the category .....");
  }
};


export const sendCategory = async (req, resp) => {
    try{
        const {name, color, icon} = req.body;
        const items = await Category.create({
           name,
           color,
           icon
        })
        return resp.status(200).send(items);


    }catch(err) {
        resp.status(401).send({err: "something went wrong"});
        console.log("something went wrong!");
    }
}


export const DeleteCategory = async(req, resp) => {
    try{
        const {id} = req.params;
        await Category.findByIdAndRemove({_id: id})
        resp.status(200).send({message: "deleted Successfully......"})


    }catch(err) {
        resp.status(401).send({err: "unable to delete..."})
        console.log("Error in deleting the category");
    }
}


export const FindcategoryByID = async(req, resp) => {
    try{
        const {id} = req.params;
        const item = await Category.findById({_id: id});
        resp.status(200).send(item)


    }catch(err) {
        resp.status(401).send({err: "Error in finding the id's.."})
        console.log("error in Finding the id");
    }

}


export const updateData = async (req, resp) => {
    try{
        const {id} = req.params
        const { name, color, icon} = req.body;
        const items = await Category.findOneAndUpdate({
            _id: id,
        }, {
            $set: {
                name,
                icon,
                color
            }
        })
        if(!items){
            resp.status(400).send({message: "Can't update the category"})
        }
       
        console.log(req.body);
        return resp.status(200).send(items);

    }catch(err) {
        resp.status(404).send({err: "Error in updating"})
        console.log("Error in updating the data....");
    }
}

