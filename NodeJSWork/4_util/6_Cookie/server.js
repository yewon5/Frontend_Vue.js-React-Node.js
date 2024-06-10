const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
app.set('port', process.env.PORT || 9999);

app.use(cookieParser("secret@1234")) //서버에 쿠키를 전달하는 역할. cookieParser(서버에게 보낼 임의의 문자열)
app.use(express.json())

//세션 미들웨어 설정
app.use(session({
    secret : "secret@1234",//(세션 ID를 암호화)
    resave : false, //새로운 요청 시 세션에 변동사항이 없어도 다시 저장할지 여부. false는 세션 데이터에 변경이 없을 때 세션을 다시 저장하지 않도록
    saveUninitialized : true, //세션에 저장할 내용이 없어도 저장할 지 여부
    cookie : {
        // httpOnly, expires(만료기간), path, secure(보안설정), ...
        httpOnly : true //http로만 쿠키를 꺼낼 수 있도록. 로그인 구현 시 필수. 자바스크립트로 접근 할 수 없게 하는 기능(JS로 접근하면 조작이 가능하기 때문에 위험)
    }
}));
//Error: secret option required for sessions : 세션을 설정할 땐 시크릿 옵션을 반드시 넣어줘야 함

app.get("/", (req, res) => {
    if(req.session.name){ //만약에 로그인한 사람있으면
        const output = `<h2>로그인한 사용자님</h2> <p>${req.session.name}님 안녕하세요</p>`
        res.send(output);
    }
    else {
        const output = `<h2>사용자님</h2> <p>로그인해주세요</p>`
        res.send(output);
    }
    
})

//실제 구현할 땐 post로 해야 함.
app.get('/login', (req, res) => { //로그인 요청이 들어 왔을 때. 세션을 서버에서 자동으로 만들어 짐.  req 접속한 사용자
    console.log(req.session); 

    req.session.name = "홍길동";
    res.end('Login OK');
}) 
//undefined로 나오면 객체 생성이 안된 것. 중간에 세션을 만들어주는 미들웨어가 있어야함. 그래서 세션이 만들어지고 쿠키를 처리 할 수 있음
/* 세션 객체 생성
Session {
    cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }
}
*/

app.get('/logout', (req, res) => {
    res.clearCookie('connect.sid');
    res.end('Logout OK');
})

app.listen(app.get('port'), ()=>{ //클라이언트가 접속할 수 있도록 준비
    console.log(app.get('port'), '번 포트에서 서버 실행 중...');
})

