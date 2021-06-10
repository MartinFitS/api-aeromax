import express from "express";
import morgan from "morgan";
import cors from "cors";
import ProductsRoutes from "./routes/products.routes";

const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares

//Request from Any Server
app.use(cors());
//Morgan
app.use(morgan("dev"));
//Interpretar JSON
app.use(express.json());
//Interpretar Html
app.use(express.urlencoded({extended:false}));

//routes
app.get("/", (req, res) => {
    res.json({ message: "welcome" })
})

app.use("/api/products", ProductsRoutes);

export default app;