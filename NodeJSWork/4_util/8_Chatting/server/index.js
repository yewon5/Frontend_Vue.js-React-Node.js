import express from 'express'; //전체적인 하나의 프로그렘이 실행될 수 있도록
import {Server} from 'socket.io';
import {createServer} from 'http';

//서버에서 할 일
const app = express(); 
const httpServer = createServer(app); //express안에 작은 웹서버(소켓)를 만듦. 서버에 소켓을 달아주는 이유는 클라이언트와 통신하기 위해(클라이언트에도 소켓 필요)
const io = new Server(httpServer);

app.use(express.static('client'));


const PORT = process.env.PORT || 9999;
httpServer.listen(PORT, ()=>{
    console.log(`${PORT}번 포트에서 서버 실행 중...`);
})

io.on('connect', (socket) => { //클라이언트가 접속했을 때 연결됐을 때. 연결됐다는건 누구랑 통신할지 정해진 것. 클라이언트 소켓의 주소가 넘어왔다는 것.
    console.log('a user connected');

    // 클라이언트로부터 'chat message' 이벤트를 수신할 때 처리
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg); //chat message가 도착했을때 실행
    });

    // 클라이언트가 연결을 해제할 때 처리
    socket.on("disconnect", () => {
        console.log('user disconnected');
    });
});



