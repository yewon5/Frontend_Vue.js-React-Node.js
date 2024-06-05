const express = require("express");
const usersRouter = require("./routes/users.routes.js");
const postsRouter = require("./routes/posts.routes.js");
const path = require('path'); // path 모듈 불러오기

/**** Constant ****/
const PORT = 4000;
const HOST = "localhost";
/******************/

const app = express();
app.set('view engine', 'hbs') // 설정엔진을 템플릿 엔진으로 사용하기 위한
app.set('/views', path.join(__dirname, 'views'));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(express.json()) // 1번째 미들웨어

//미들웨어 테스트 코드
app.use((req, res, next)=>{ // 2번째 미들웨어. 응답하기전이어야함. use로 미들웨어를 만드는 것. 
    const start = Date.now();
    console.log(`start : ${req.method} ${req.url}`) 
    next(); //req와 res사이의 연결동작을 만듦

    const diffTime = Date.now() - start;
    console.log(`end : ${req.method} ${req.baseUrl} ${diffTime}ms`)
    //url은 계속 바뀔 수 있어서 baseUrl 사용
});


app.use("/users", usersRouter); // 3번째 미들웨어
app.use("/posts", postsRouter); // 4번째 미들웨어

/**** Routing ****/
//app.get("/", (req, res)=>{ res.send( "Hello World"); });
app.get("/", (req, res)=> {res.render('index', {imageTitle : "It is a puppy"})}); ///views폴더에 있는 index 실행
/*****************/


//listen 서버를 계속 실행 상태로 만듦
app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);
