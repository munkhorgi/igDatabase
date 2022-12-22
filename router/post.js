import express, { Router } from "express";
import {
  getAllPosts,
  createPost,
  updatePost,
  removePost,
} from "../controller/post.js";

const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").put(updatePost).delete(removePost);

export default router;