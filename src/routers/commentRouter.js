import express from "express";
import { createComment } from "../controllers/Comment/createComment.js";
import { getComments } from "../controllers/Comment/getComment.js";
import { deleteComment } from "../controllers/Comment/deleteComment.js";

const commentRouter = express.Router();

commentRouter.post("/comments", createComment);
commentRouter.get("/comments", getComments);
commentRouter.delete("/comments/:id", deleteComment);

export default commentRouter;
