import express, {Express} from 'express';
import dotenv from "dotenv";

let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const port: number = 8000;

let adminRouter = require("./routes/admin");
let frontRouter = require("./routes/front");

const errorController = require("./app/controllers/error.controller");

const app: Express = express();

dotenv.config();

app.set("views", path.join(__dirname, "../views")); // it will be in dist so we can move it outside
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminRouter);
app.use("/", frontRouter);

app.use(errorController.error404);
app.use(errorController.handleError);

app.listen(port, () => {
    console.log(`[server] Server is running at port: ${port}`);
})
