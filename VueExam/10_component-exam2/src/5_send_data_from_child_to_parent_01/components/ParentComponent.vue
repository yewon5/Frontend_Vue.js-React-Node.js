<template>
    <div class="parent">
        Parent 컴포넌트
        <div>
            자식에게 받은 데이터 = {{selectedMemo}}
        </div>
        <child-component @select="onSelectedMemo"></child-component>
        <!-- @는 이벤트 축약기호인데 여기선 이벤트가 아니라 자식의 이벤트를 호출하여 ChildComponent.vue의 onSelected(memo) 메모값을 가져오고, onSelectedMemo() 호출-->
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

    export default {
        components: { ChildComponent },
        data() {
            return { selectedMemo : "" }
        },
        methods : {
            onSelectedMemo(memo){
                this.selectedMemo = memo
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