import express from "express";
import { verifyToken } from "../../middlewares/auth.js";
import {
  createPedido,
  getPedidoById,
} from "../../controllers/PedidosController.js";
const routerUserPedidos = express.Router();

//routerUserProductos.get("/", getAllProductos);
//routerUserProductos.get("/:id", verifyToken, getProducto);
routerUserPedidos.post("/", createPedido);
routerUserPedidos.get("/:idcomprador", getPedidoById);

///router3.put("/:id", updateProducto);
///router3.delete("/:id", deleteProducto);

export default routerUserPedidos;
