<<<<<<< HEAD
import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// /api/my/user
router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

export default router;
=======

import express from 'express';
import MyUserController from '../controllers/MyUserController';


const router = express.Router();


router.post("/",MyUserController.createCurrentUser);


export default router;


>>>>>>> a22d48b3e81942e9dd2e35385802a6d7ba870e2b
