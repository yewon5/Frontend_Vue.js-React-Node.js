import oracledb from 'oracledb';

//commonsjs에서는 module안 씀
const dbConfig = {
    user : "user1",
    password : "1111",
    connectString : "localhost:1521/xe"
}

//createPool, close 비동기식이므로 async-await로 처리.
const initialize = async() => {
    await oracledb.initOracleClient({libDir : "C:\\WON\\download\\instantclient_21_14"})
    await oracledb.createPool(dbConfig);
    console.log("Oracle Pool Initialized");
}

const close = async() => {
    await oracledb.getPool().close();
    console.log("Oracle Pool Closed");
}

export {initialize, close, oracledb}
//dbConfig는 const로 선언해서 외부에서 수정할 수는 없겠지만 export로 노출할 경우 위험.
//외부에서는 연결하고 끊어주는 것만 전달하면 됨