import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";

const app = express();
const PORT = 8000;

//Dotenv configuration
dotenv.config();

// ModdleWares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/api/v1/test-post", testRoutes);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`listening on port http://localhost:${PORT}`);
});
