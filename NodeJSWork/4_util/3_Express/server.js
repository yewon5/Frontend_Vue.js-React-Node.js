const express = require("express");
const userscontroller = require("./controllers/users.controller") //컨트롤러 불러오기

/**** Constant ****/
const PORT = 4000;
const HOST = "localhost";
/******************/

const app = express();

app.use(express.json())

app.use((req, res, next)=>{ //응답하기전이어야함. use로 미들웨어를 만드는 것. 
    const start = Date.now();
    console.log(`start : ${req.method} ${req.url}`)
    next(); //req와 res사이의 연결동작을 만듦

    const diffTime = Date.now() - start;
    console.log(`end : ${req.method} ${req.url} ${diffTime}ms`)
});

/**** Routing ****/
app.get("/", (req, res)=>{ res.send("Hello World"); });
app.get("/users", userscontroller.getUsers)//컨트롤러 호출
/*****************/



app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
