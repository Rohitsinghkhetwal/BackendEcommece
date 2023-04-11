import express from 'express';
import dotenv from 'dotenv/config';
import morgan from 'morgan';
import cors from 'cors';
import dbConnection from './Connection/Connection.js';
import productRouter from './routes/ProductRoute.js';
import CategoryRouter from './routes/CategoryRoutes.js';
import GetProductRoute from './routes/GetProductRoute.js';
import UsersRoutes from './routes/UsersRoutes.js';
import expressjwt  from 'express-jwt'
import errHandler from './Helpers/Errhandler.js';
import OrderRoutes from './routes/Order-Routes.js';

const app = express();
const PORT = 8900;

const api = process.env.API_URL;
//middleware 
app.use(express.json()); 
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors);

//Api authorization 
app.use(expressjwt({
    secret: process.env.secret,
    algorithms: ["HS256"],

}).unless({
    path: [
        {url:'/getProducts' , methods: ['GET', 'OPTIONS'] },
        "/UsersRoute/login",
        "/UserRoute/createUser"
    ]
})
)
app.use(errHandler)


//Routes
dbConnection();
app.use("/products", productRouter)
app.use("/category", CategoryRouter)
app.use("/getProducts", GetProductRoute)
app.use("/UsersRoute", UsersRoutes)
app.use("/Order", OrderRoutes)


app.listen(PORT, () => {
    
    console.log(`server is up and running at ${PORT}`);
})
