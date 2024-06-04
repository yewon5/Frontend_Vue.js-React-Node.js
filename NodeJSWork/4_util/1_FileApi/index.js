const fs = require('fs');
const filepath = "./data.json"

function readFile(){
    try{
        const data = fs.readFileSync(filepath, 'utf-8');
        return JSON.parse(data);// 문자열을 json객체타입으로 읽어온다
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

function writeFile(data){
    try{
        fs.writeFileSync(filepath, JSON.stringify(data, null, 2)); //JSON타입을 문자열로 바꿔줘야 한다. 2칸 들여쓰기
    }
    catch(err){
        console.error('파일 쓰기 오류 : ', err);
    }
}

function create(key, value){ //명령어로 전달 받고 문제가 없으면 writeFile로 전달
    const data = readFile();
    if(data[key]){ // 같은 키가 있는지 비교 
        console.log("데이터가 이미 존재합니다.")
        return;
    }

    data[key] = value;
    writeFile(data);
    console.log("데이터가 생성되었습니다.")
}

function update(key, value){
    const data = readFile();
    if(data[key]){
        data[key] = value;
        writeFile(data);
        console.log('데이터가 업데이트 되었습니다.');
    }
    else{
        console.log('데이터를 찾을 수 없습니다.');
    }
}

function remove(key){
    const data = readFile();
    if(data[key]){
        delete data[key];
        writeFile(data);
        console.log('데이터가 업데이트 되었습니다.');
    }
    else{
        console.log('데이터를 찾을 수 없습니다.');
    }
}

// node index.js read name 읽기
// node index.js create age 20 //create라는 명령어로 키와 값을 전달
// node index.js update name Alice
// node index.js delete name 
const args = process.argv.slice(2)
const command = args[0]
const key = args[1]

const value = args[2]

switch(command) {
    case 'read':
        read(key);
        break;
    case 'create':
        create(key, value)
        break;
    case 'update':
        update(key, value);
        break;
    case 'delete':
        remove(key)
        break;
    default:
        console.log('사용 가능한 명령어 : create, read, update, delete');
        console.log('예시 : node index.js create key value');
}