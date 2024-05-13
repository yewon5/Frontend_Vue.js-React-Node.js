<template>
  <div>
    <h1>컴포넌트를 이용한 메모장</h1>
  </div>
  <hr>
  <div id="app">
    <list-page :list="list" :setReadMemo="setReadMemo" v-if="mode == MODE.LIST"></list-page>
    <read-page :current-memo="selectedMemo" :setMode="setMode" v-if="mode == MODE.READ"></read-page>
  </div>
</template>

<script>
import ListPage from './pages/ListPage.vue'
import ReadPage from './pages/ReadPage.vue'
import {MODE} from './common' 
// default 아닌 export는 import할때 여러개중 1개 불러와야하므로 {}로 묶는다. 
// import하면 스크립트 안에서만 사용가능한데 html에서도 객체를 사용하려면 computed속성으로 MODE객체를 반환한다.

export default {
  name: 'App',
  components: {
    ListPage,
    ReadPage
  },
  data(){
    return { 
      list : ["memo1", "memo2", "memo3"],
      selectedMemo : "", // 인덱스 저장할 변수
      mode : MODE.LIST
    }
  },
  methods : {
    setReadMemo(index){ // 메모의 인덱스를 리스트에 전달해서 리스트가 호출하도록
      this.selectedMemo = this.list[index]
      this.mode = MODE.READ // mode 값이 list일때 read가 나타나도록
    },
    setMode(mode){ // 버튼을 눌렀을때 리스트페이지로 이동
      this.mode = mode;
    }
  },
  computed : { //html 영역에서도 MODE.LIST,MODE.READ와 같이 'MODE' 객체의 속성에 접근할 수 있다.
    MODE(){
      return MODE;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
