import { oracledb } from '../config/oracle.js';

//DAO 중간에 컨트롤러를 통해서 사용할 수 있도록
//모든 데이터를 조회해서 페이지에 보여줌. 함수로 처리
const getAllItem = async(req, res) => {
    let connection;
    try {
        connection = await oracledb.getConnection();
        let reslut = await connection.execute('select * from items')
        console.log(reslut.rows)
        return reslut.rows;
    }
    catch(err) {
        console.log(err);
    }
    finally {
        if(connection){
            try {
                await connection.close();
            }
            catch(err) {
                console.log(err);
            }
        }
    }
}

//회원 추가
const createItem = async(item) => { //어떤 것을 insert할 것인지는 매개변수로 받아옴
    let connection = await oracledb.getConnection();
    console.log(item.name, item.description)
    let reslut = await connection.execute(`insert into items values(seq_items.nextval,
        :name, :description)`, [item.name, item.description], {autoCommit:true});
    await connection.close();
}

//특정 ID만 조회
const getItemById = async(id) => {
    let connection;
    try {
        connection = await oracledb.getConnection();
        let reslut = await connection.execute('select * from items where id = :id', [id])
        return reslut.rows[0];
    }
    catch(err) {
        console.log(err);
    }
    finally {
        if(connection){
            try {
                await connection.close();
            }
            catch(err) {
                console.log(err);
            }
        }
    }
}

//
const updateItem = async(id, item) => {
    let connection;
    try {
        connection = await oracledb.getConnection();
        let reslut = await connection.execute('update items set name = :name, description = :description where id = :id',
            [item.name, item.description, id], {autoCommit:true});
        return reslut.rows[0];
    }
    catch(err) {
        console.log(err);
    }
    finally {
        if(connection){
            try {
                await connection.close();
            }
            catch(err) {
                console.log(err);
            }
        }
    }
}

const deleteItem = async(id) => {
    let connection;
    try {
        connection = await oracledb.getConnection();
        let reslut = await connection.execute('delete from items where id = :id', [id], {autoCommit:true});
        return reslut.rows[0];
    }
    catch(err) {
        console.log(err);
    }
    finally {
        if(connection){
            try {
                await connection.close();
            }
            catch(err) {
                console.log(err);
            }
        }
    }
}

export {getAllItem, createItem, getItemById, updateItem, deleteItem}

