import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Productroutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddlewares.js";
const app = express();
dotenv.config();

app.use("/api/products", Productroutes);

app.use(notFound);
app.use(errorHandler);

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
