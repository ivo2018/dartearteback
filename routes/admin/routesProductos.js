import express from "express";
import { verifyToken } from "../../middlewares/auth.js";
import {
  createProducto,
  deleteProducto,
  getAllProductos,
  getProducto,
  updateProducto,
} from "../../controllers/ProductosController.js";
const router3 = express.Router();

router3.get("/", getAllProductos);
router3.get("/:id", getProducto);
router3.post("/", createProducto);
router3.put("/:id", updateProducto);
router3.delete("/:id", deleteProducto);

export default router3;
