//간단한 샘플
const http = require('http')
const PORT = 3000;
const server = http.createServer((req, res)=>{ //요청,응답 기본으로 준비
    //res.writeHead(200, {'Content-Type':'text/plain'}) //상태코드 200(성공), 응답의 타입이 일반 텍스트임을 지정
    //res.end('Hello, World');

    res.writeHead(200, {'Content-Type':'application/json'})
    data = {name : "Tom", age : 20}
    res.end(JSON.stringify(data)); //end함수안에는 아직 문자열이여야해서 JSON.stringify
}); 
server.listen(PORT, ()=>{console.log(`서버 실행 중... ${PORT}`)});