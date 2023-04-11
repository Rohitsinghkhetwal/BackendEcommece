import Product from "../Model/ProductSchema.js";
import Category from "../Model/CategoryModel.js";

export const CreateProducts = async (req, resp) => {
  try {
    const item = await Category.findById(req.body.category);
    if (!item) {
      return resp.status(404).send({ message: "Invalid Category...." });
    }

    const {
      name,
      description,
      richdiscription,
      image,
      images,
      brand,
      price,
      category,
      countInStock,
      rating,
      numReviews,
      isFeatured,
      dateCreated,
    } = req.body;

    const createdProducts = await Product.create({
      name,
      description,
      richdiscription,
      image,
      images,
      brand,
      price,
      category,
      countInStock,
      rating,
      numReviews,
      isFeatured,
      dateCreated,
    });
    if (!createdProducts) {
      resp.status(500).send({ message: "failed" });
    }
    return resp.status(201).send(createdProducts);
  } catch (err) {
    resp.status(404).send({ err: "Unable to create a product" });
    console.log("somethig went wrong.....");
  }
};

export const GetallProducts = async (req, resp) => {
  try {
    const items = await Product.find({});
    return resp.status(200).send(items);
  } catch (err) {
    resp.status(400).send({ err: "Error on getting " });
    console.log("Something went wrong.......");
  }
};

export const getById = async (req, resp) => {
  try {
    const { id } = req.params;
    const items = await Product.findById({ _id: id });
    return resp.status(200).send(items);
  } catch (err) {
    resp.status(400).send({ message: "Error in getting results" });
    console.log("Fail..");
  }
};

//if i want to get only few value  lets say i want name and price only in that case api will
export const getfewvalue = async (req, resp) => {
  try {
    const ProductList = await Product.find().select("name price image");
    resp.status(200).send(ProductList);
  } catch (err) {
    resp.send({ err: "Error" });
  }
};

// export const updateWithId = async (req, resp) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.isValidObjectId(id)) {
//       resp.status(400).send("Invalid Product id");
//     }

//     const item = await Category.findById(req.body.category);
//     if (!item) return resp.status(500).send({ err: "invalid category" });

//     const {
//       name,
//       description,
//       richdiscription,
//       image,
//       images,
//       brand,
//       price,
//       category,
//       countInStock,
//       rating,
//       numReviews,
//       isFeatured,
//       dateCreated,
//     } = req.body;
//     const product = await Product.findByIdAndUpdate(
//       { _id: id },
//       {
//         $set: {
//           name,
//           description,
//           richdiscription,
//           image,
//           images,
//           brand,
//           price,
//           category,
//           countInStock,
//           rating,
//           numReviews,
//           isFeatured,
//           dateCreated,
//         },
//       }
//     );
//     console.log(product);

//     if (!product) {
//       return resp.status(500).json({err: "err"});
//     }
//     resp.status(200).send(product);
//   } catch (err) {
//     resp.send({ err: "err" });
//     console.log("something went wrong!!");
//   }
// };

// export const DeleteProductId = async (req, resp) => {
//   try {
//     const { id } = req.params;
//     const result = await Product.findByIdAndRemove({ _id: id });
//     if (!result) {
//       return resp.status(400).send({ err: "failed" });
//     }
//     resp.status(200).send({ message: "Deleted successfully" });
//   } catch (err) {
//     resp.status(404).send({ err: "Error in deleting item" });
//   }
// };

// cout documents api to count products

// export const countD = async (req, resp) => {
//   try {
//     const item = await Product.countDocuments((result) => result);
//     console.log(item);
//     if (!item) {
//       resp.status(400).json({ success: false });
//     } else {
//       resp.send({
//         result: item,
//       });
//     }
//   } catch (err) {
//     console.log("error");
//   }
// };

// filtering the specific data 
// Query parameter 

// export const filteringData = async(req, resp) => {
//   try{
//     let filter = {}
//     if(req.query.categories){
//        filter = {category :req.query.categories.split(',')};
//     }

//     const productList = await Product.find(filter).populate('category');
//     if(!productList){
//       resp.status(500).json({success: false})
//     }

//     resp.send(productList);

//   }catch(err) {
//     resp.status(404).send({err: "errr"})

//     throw(err);
//   }

// }
