import express from 'express'; //package.json에서 "type":"module" 추가
import { initialize, close, oracledb } from './config/oracle.js';

const app = express();
app.set('port', process.env.PORT || 9999);

//initialize가 promise 객체라서 cath 사용 가능
initialize().then(() => {
    app.listen(app.get('port'), ()=>{ //클라이언트가 접속할 수 있도록 준비
        console.log(app.get('port'), '번 포트에서 서버 실행 중...');
    })
}).catch((err) => {
    console.log("Failed to initialize database", err);
    process.exit(1);
});

//ctrl+c 종료시킬때 이벤트 발생
process.on('SIGINT', () => { //'SIGINT' 키보드로 종료하니까 숫자값이 전달되면 종료.
    close().then(()=>{
        console.log("Database connectionn closed");
        process.exit(0);
    }).catch((err) => {
        console.log("Failed to close database", err);
        process.exit(1);
    });
})


//api를 서비스할 수 있는 메인 페이지
app.get("/", (req, res)=>{
    const main = `
        <h1>API Test</h1>
        <a href='/api/items'>리스트 페이지</a>
    `
    res.send(main);
})

//모든 데이터를 조회해서 페이지에 보여줌. 함수로 처리
const getAllItem = async(req, res) => {
    let connection = await oracledb.getConnection();
    let reslut = await connection.execute('select * from items')

    console.log(reslut.rows)
}
app.get("/api/items", getAllItem) //getAllItem 콜백함수를 준비해야해서 괄호 붙이면 안 됨.
