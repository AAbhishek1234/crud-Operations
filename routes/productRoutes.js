import express from "express"
import { createProduct,deleteProduct,getAllProduct, updateProduct } from "../controllers/productController.js";



const router = express.Router();

router.post("/create",createProduct)
router.get("/fetch",getAllProduct)
router.put("/update",updateProduct)
router.delete("/delete",deleteProduct)
export default router