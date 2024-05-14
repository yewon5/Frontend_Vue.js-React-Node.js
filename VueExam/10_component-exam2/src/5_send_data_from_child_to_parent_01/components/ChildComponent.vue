<template>
    <div class="child">
        Child 컴포넌트
        <div :list="list">
            <ul>
                <li v-for="memo in list" @click="onSelected(memo)">{{memo}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    const ChildComponent = { //SELECT 키 값 추가하기위해 export default를 ChildComponent변수에 담아서 묶어주고 마지막에 export한다.
        data(){
            return { list : ["memo1", "memo2", "memo3"] }
        },
        methods : {
            onSelected(memo){ //메모를 클릭했을 때 데이터를 부모에게 전달
                //console.log(memo)
                this.$emit(ChildComponent.SELECT, memo) //(부모가 참조할 수 있는 위치(자식이 만들어줘야함), 전달할 내용)
            }
        }
    }

    ChildComponent.SELECT = "select" // 객체화, SELECT 변수명은 내마음. "select"는 ParentComponent.vue에서 @select로 사용

    export default ChildComponent
</script>

<style scoped>
    .child {
        border : 1px solid rosybrown;
        margin : 10px;
    }
</style>