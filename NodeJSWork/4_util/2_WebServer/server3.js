//post 방식으로 데이터를 저장
const http = require('http')
const PORT = 3000;
const server = http.createServer((req, res)=>{ //요청,응답 기본으로 준비
const original_data = {name : "Tom", age : 20} //원본을 복사해서 추가할 것이기 때문에 const로 선언해도 됨

    if(req.method === 'GET' && req.url === '/home') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json') //writeHead() 처음 한 번 셋팅할때만 사용
        res.end(JSON.stringify(original_data)); //end함수안에는 아직 문자열이여야해서 JSON.stringify
    }
    else if(req.method === 'POST' && req.url === '/home'){
        req.on('data', (data)=>{ //추가할 data
            const postData = data.toString();
            console.log(postData);
            Object.assign(original_data, JSON.parse(postData)) //원본데이터, 추가할 데이터
        }); 
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