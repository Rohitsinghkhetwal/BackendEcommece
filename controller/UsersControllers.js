import bcrypt from "bcrypt";
import User from "../Model/UserSchema.js";
import Jwt from "jsonwebtoken";

const Secret_key = process.env.secret
const getUserToken = (_id) => {
  const authenticatedToken = Jwt.sign({_id}, Secret_key, {expiresIn: "3d"});
  return authenticatedToken;

}


export const GetUsers = async (req, resp) => {
  try {
    const users = await User.find({}).select('-passwordHash');
    return resp.status(200).send(users);
  } catch (err) {
    resp.status(400).send({ err: "err" });

    throw err;
  }
};

export const createUser = async (req, resp) => {
  try {
    const {
      name,
      email,
      phone,
      isAdmin,
      street,
      apartment,
      zip,
      country,
    } = req.body;

    const customers = await User.create({
      name,
      email,
      passwordHash: bcrypt.hashSync(req.body.password, 10),
      phone,
      isAdmin,
      street,
      apartment,
      zip,
      country,
    });

    if (!customers) {
      return resp.status(500).json("Cannot create User.!");
    }
    resp.status(200).send(customers);
  } catch (err) {
    resp.status(500).send({ error: "Somthing went wrong with creating api" });
  }
};

export const getById = async(req, resp) => {
    try{
        const {id} = req.params;
        const users = await User.findById({_id: id}).select('-passwordHash');
        return resp.status(200).send(users);

    }catch(err) {
        console.log("err");
        resp.status(500).json({err: "Something went wrong........"});
    }
}

export const Login = async (req, resp) => {
  try{
    const {email, password} = req.body; 
    const Existinguser = await User.findOne({email});
    if(!Existinguser){
      return resp.status(400).send({mess: "User Not found.."});
    }

    if(Existinguser && bcrypt.compareSync(password, Existinguser.passwordHash)){
      const token = getUserToken(Existinguser._id);
      resp.status(200).send({
        token,
        user: {
          email: Existinguser.email,
          name: Existinguser.name
        }
      });
    }else{
      resp.status(400).send("Wrong Credentials")
    }

  }catch(err) {
    resp.send("err");
    console.log("err");

  }

}
