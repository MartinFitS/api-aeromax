import { Router } from "express";
import * as productsCtrl from "../controllers/products.controllers";

const router = Router();

//Get All Products
router.get("/", productsCtrl.getAllProducts);

//Create A Product
router.post("/", productsCtrl.createProduct);

//Get One Product
router.get("/:id", productsCtrl.getOneProduct);

//Delete a Product
router.delete("/:id", productsCtrl.deleteProduct);

//Update A Product
router.put("/:id", productsCtrl.updateProduct);

export default router;