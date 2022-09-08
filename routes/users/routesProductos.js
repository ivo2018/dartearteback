import express from "express";

import {
  createProducto,
  deleteProducto,
  getAllProductos,
  getProducto,
  updateProducto,
} from "../../controllers/ProductosController.js";
const routerUserProductos = express.Router();

routerUserProductos.get("/", getAllProductos);
//router3.get("/:id", getProducto);
///routerUserProductos.post("/", createProducto);
///router3.put("/:id", updateProducto);
///router3.delete("/:id", deleteProducto);

export default routerUserProductos;
