import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import registerRoutes from "./routes/MaskingApiRoutes.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

registerRoutes(app);

app.listen(port, () => console.log("Server is running on PORT:", port));
