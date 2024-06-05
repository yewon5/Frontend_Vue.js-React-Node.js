const express = require("express");
const postsRouter = express.Router();
const postscontroller = require("../controllers/posts.controller") //컨트롤러 불러오기

postsRouter.get("/", postscontroller.getPost)

module.exports = postsRouter;