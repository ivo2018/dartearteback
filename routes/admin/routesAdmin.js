import express from "express";
//import { verifyToken } from "../middlewares/auth.js";

import {
  createAdmin,

  //session,
  // verifyToken,
  // auth,
} from "../../controllers/AuthController.js";
const routerAdmin = express.Router();

routerAdmin.post("/create", createAdmin);

export default routerAdmin;
