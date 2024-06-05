const express = require("express");
const usersRouter = express.Router();
const userscontroller = require("../controllers/users.controller") //컨트롤러 불러오기

// server.js파일에서 app.use("/users", usersRouter); 기본경로를 /users로 설정함
usersRouter.get("/", userscontroller.getUsers)// 컨트롤러 호출
usersRouter.get("/:userId", userscontroller.getUser); // :콜론을 사용하여 변수명 지정
usersRouter.post("/", userscontroller.postUser) // restful방식.

module.exports = usersRouter;