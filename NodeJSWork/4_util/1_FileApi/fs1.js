//모듈 가져올때 require로 가져와야 함
//확장자를 js로 했기때문에 import 필요 없음. commonjs 방식
const fs = require("fs") 

const content = "Hello World~~ Mr.monkey"

//파일 저장하기
fs.writeFile("./hello.txt", content, (err)=>{ //(파일 위치, 텍스트 내용, 콜백)
    if(err){
        console.log(err);
    }

    //node.js는 기본이 비동기라서 writeFile안에 쓰면
    fs.readFile("./hello.txt", "utf-8", (err, data)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log(data);
    })
}); // 이 파일에 데이터를 저장할때 호출하는 함수. 이 함수는 오류 객체를 매개변수 받음


