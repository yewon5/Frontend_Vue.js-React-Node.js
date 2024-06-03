const fs = require('fs');
const filepath = "./data.json"

function readFile(){
    try{
        const data = fs.readFileSync(filepath, 'utf-8');
        return JSON.parse(data);// 문자열이 아닌 json객체타입으로 읽어온다
    }
    catch(err){
        console.error('파일 읽기 오류 : ', err);
    }
}

function read(key){
    const data = readFile();
    if(data[key]){
        console.log(`${key} : ${data[key]}`);
    }
    else {
        console.log('데이터를 찾을 수 없다.')
    }
}
// node index.js read name 읽기
// node index.js create age 20
// node index.js updatae name Alick
// node index.js delete name 
const argv = process.argv.slice(2)
const command = args[0]
const key = args[1]

switch(command) {
    case 'read':.23
        read(key);
        break;
}