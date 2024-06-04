const model = require("../models/users.model");

function getUsers(req, res){
    //app.get("/Users", (req, res)=>{ res.send(model); }); 
    //server.js에 Routing에서 매핑을 했기때문에 view에 전달할 수 있게 해주면 됨
    res.send(model);
}

function getUser(req, res){

}

//사용자 추가
function postUser(req, res){

}

/*
app.get("/Users/:userId", (req, res)=>{ // :콜론을 사용하여 변수명 지정
    const userId = (req.params.userId); // 사용자가 보내온 값을 인덱스로 꺼내와야하는데, 문자열이기때문에 숫자로 바꿔준다
    const user = Users[userId];
    //console.log(user) //http://localhost:4000/users/1
    if(user){
        res.end(user); //json,send,end 3가지 함수사용 가능. json,send는 객체. end는 출력용이아니라 세션을 종료할때 사용.
        //404 에러나 데이터를 보내지 않고 종료할때 end사용. send 데이터를 보내기위한 목적
    }
    else{
        res.sendStatus(404);
    }
});

app.post('/users', (req, res)=>{ //restful방식. 
    //console.log('요청값 : ' + req.body.name)//중요한 것은 데이터를 잘 받아왔는지
    if(!req.body.name){
        return res.status(400).json({error : "Missing user name"});
    }

    const newUser = {
        name : req.body.name,
        id : Users.length
    }

    Users.push(newUser);
    res.json(newUser)
}); 
//TypeError: Cannot read properties of undefined (reading 'name')
*/

module.exports = {getUsers};