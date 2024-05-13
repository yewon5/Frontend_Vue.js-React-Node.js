import { createApp } from 'vue'
//import App from './step1/App.vue'
//import App from './step2/App.vue'
import App from './step3/App.vue'
//import App from './step4/App.vue'
//import App from './step5/App.vue'

import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


const app = createApp(App) //Vue 애플리케이션의 인스턴스를 생성
//app 인스턴스의 component 메소드를 사용하여 전역 컴포넌트를 등록
//"header-component"는 등록할 컴포넌트의 태그 이름(이미 케밥표기법으로 등록했기때문에 그대로 사용)
app.component("header-component", HeaderComponent)
app.component("footer-component", FooterComponent)

app.mount('#app') //mount 메소드를 사용하여 Vue 애플리케이션을 지정된 요소에 마운트


