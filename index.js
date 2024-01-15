import express, { response } from "express";
import { PORT } from "./config.js";
import { mongooseConnection } from "./config.js";
import userRouter from "./routes/userRoute.js";
import adminRouter from "./routes/adminRoute.js";

import cors from "cors";

const app = express();

//Middleware for parsing request body
app.use(express.json());
//Middleware for handling CORS policy
app.use(cors());

app.use("/user", userRouter);
app.use("/", adminRouter);

mongooseConnection();

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
