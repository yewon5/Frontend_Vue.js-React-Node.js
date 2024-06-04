//라우팅 기능
const http = require('http')
const PORT = 3000;
const server = http.createServer((req, res)=>{ //요청,응답 기본으로 준비

    if(req.url === '/home') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json') //writeHead() 처음 한 번 셋팅할때만 사용
        data = {name : "Tom", age : 20}
        res.end(JSON.stringify(data)); //end함수안에는 아직 문자열이여야해서 JSON.stringify
    }
    else if (req.url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body>');
        res.write('<h1>About Page</h1>');
        res.write('</body></html>');
        res.end();
    }
    else {
        res.statusCode  = 404;
        res.end();
    }
}); 
server.listen(PORT, ()=>{console.log(`서버 실행 중... ${PORT}`)});