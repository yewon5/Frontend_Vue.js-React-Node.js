<template>
    <header-component title="리스트 페이지"></header-component>
    <div>
        리스트 컨텐츠
        <ul>
            <li v-for="(memo, index) in list" :key="index" @click="setReadMemo(index)">{{index}} : {{memo}}</li>
        </ul>
    </div>
    <div>
        <button @click="setMode(MODE.WRITE)">메모 추가</button>
    </div>
    <footer-component></footer-component>
</template>

<script>
import {MODE} from "../common"

    export default {
  components: { },
        props : {
            list : { // 배열로 받아와야함
                type : Array,
                default : []
            },
            setReadMemo : { //부모가 만든 함수의 정보를 체크하기 위한 검증 단계
                type : Function
            },
            setMode : { //체크
                type : Function
            }
        },
        computed : { //html 영역에서도 'MODE' 객체의 속성에 접근할 수 있다.
            MODE(){
                return MODE;
            }
        }
    }
</script>

<style scoped>

</style>