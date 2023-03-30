import express from "express";
import { verifyToken } from "../../middlewares/auth.js";

import {
  createAdmin,
  getAllAdmin,
  getAdmin,
  //session,
  // verifyToken,
  // auth,
} from "../../controllers/AuthController.js";
const routerAdmin = express.Router();
routerAdmin.get("/", getAllAdmin);

//routerAdmin.get("/:id", verifyToken, getAdmin);
routerAdmin.get("/:id", getAdmin);
routerAdmin.post("/create", createAdmin);

export default routerAdmin;
