// 컴포넌트는 아니고 모듈, 함수, 기능
import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://localhost:8080/api', //어떤 서버에 접속할 것인지
    headers : {
        'content-type' : 'application/json'
    }
});

export default instance;