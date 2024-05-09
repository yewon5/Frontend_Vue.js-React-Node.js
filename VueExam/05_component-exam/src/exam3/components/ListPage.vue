<template>
    <div class="test1">
        <list-header></list-header>
        <div>리스트 페이지입니다.</div>
        <ul>
            <li v-for="(memo, index) in list" :key="index">{{memo}}</li>
        </ul>
        <list-footer></list-footer>
    </div>
</template>

<script>
import ListFooter from './ListFooter.vue'
import ListHeader from './ListHeader.vue'

export default {
  components: { 
    ListHeader, 
    ListFooter 
  },
  data(){ // 부모로부터 데이터를 전달 받을 거니까 App.vue에 데이터 등록
      // return { list : ["memo1", "memo2", "memo3"] }
  },
  props : {// props은 부모 → 자식에게 데이터 전달할때 사용. 전달 받은 데이터 검사/등록. (emit은 자식 → 부모 or 같은 레벨의 컴퍼넌트끼리 데이터 전달)
    list : {
       type : Array, // list가 배열이라서
       required : true // 매칭되면 데이터 사용 가넝
    }
  }
}
</script>


ListHeader<style>
    .test1 {font-size: 20px;}
</style>