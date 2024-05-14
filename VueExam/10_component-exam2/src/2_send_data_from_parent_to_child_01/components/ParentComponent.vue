<template>
    <div class="parent">
        Parent 컴포넌트
        <div>
            <button @click="addMemo"> 부모에서 자식으로 데이터 보내기 </button>
        </div>
        <child-component :prop="prop"></child-component>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

    export default {
        components: { ChildComponent },
        data() {
            return { list : ["memo1", "memo2"] }
        },
        methods : {
            addMemo(){
                // memo3, memo4, ...
                
            }
        }
    }
</script>

<style scoped>
    .parent {
        border : 1px solid royalblue;
        margin : 10px;
    }
</style>