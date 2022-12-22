import express, { Router } from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  removeUser,
} from "../controller/user.js";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").put(updateUser).delete(removeUser);

export default router;
