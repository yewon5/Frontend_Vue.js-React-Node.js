const oracledb = require("oracledb");
const dbconfig = require("./root/dbconfig");
oracledb.autoCommit = true;

function init(){
    oracledb.initOracleClient({libDir : "C:\\WON\\download\\instantclient_21_14"});
}

init();
// DB연결 테스트
oracledb.getConnection({
    user:dbconfig.user,
    password: dbconfig.password,
    connectionString: dbconfig.connectString
}, (err, conn) => {
    //init(); //연결 성공 : undefined 오류는 init();을 바깥으로 빼주면 해결된다.
    console.log("연결 성공 : " + conn); //연결 성공 : [object Object] 객체가 들어있으면 연결 성공!
    let sql;


    // create
    /*
    sql = "create table cuser(id varchar2(10), name varchar2(10), age number)";
    conn.execute(sql);
    console.log("테이블 생성 완료");


    // insert
    sql = "insert into cuser values(:id, :name, :age)";

    // 데이터를 한 개 넣을 때
    //binds = [["id01", "Tom", 27]]
    binds = [["id02", "Won", 20], ["id03", "Kim", 23], ["id04", "Lee", 31]]
    let result = conn.executeMany(sql, binds, {})
    console.log(result);
    

    // update
    sql = "update cuser set name=:name, age=:age where id=:id";
    conn.executeMany(sql, [["Won", 18, "id04"]])
    console.log("수정 완료");

 
    // delete
    sql = "delete from cuser where id=:id";
    conn.executeMany(sql, [["id03"]])
    console.log("삭제 완료");
    */


    // select
    sql = "select * from cuser";
    conn.execute(sql, [], (err, result) => {
        if(err){
            throw err;
        }
        console.log(result.rows);
        // DB연결 끊기
        doRelease(conn);
    })
});

const doRelease = (conn) => {
    conn.release((err) => {
        if(err){throw err;}
    })
}