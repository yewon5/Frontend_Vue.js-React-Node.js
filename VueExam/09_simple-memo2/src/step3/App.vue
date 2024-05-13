<template>
  <div>
    <h1>컴포넌트를 이용한 메모장</h1>
  </div>
  <hr>
  <div id="app">
    <list-page :list="list" :setReadMemo="setReadMemo" v-if="mode == 'list'"></list-page>
    <read-page :current-memo="selectedMemo" v-if="mode == 'read'"></read-page>
  </div>
</template>

<script>
import ListPage from './pages/ListPage.vue'
import ReadPage from './pages/ReadPage.vue'

const MODE = {
  LIST : "list",
  READ : "read"
}

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
      this.mode = MODE.READ // 모드 값이 list일때 read가 나타나도록
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
