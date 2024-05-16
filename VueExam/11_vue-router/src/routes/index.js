import { createWebHashHistory, createWebHistory, createRouter } from 'vue-router'
//History 경로를 보관해서 컴포넌트랑 매칭
import Home from './Home.vue'
import About from './About.vue'

//App.vue에서 사용할 수 있도록. 뷰가 아니기때문에 마운트할 필요 없다
export default createRouter ({
    history : createWebHistory(), //createWebHashHistory : test용, 주소에 #이 들어감. createWebHistory : 새로고침, # 안 들어감
    routes : [ //경로랑 컴포넌트 연결
        { path : "/", component : Home }, //http://google.com
        { path : "/about", component : About } //http://google.com/about
    ]
})