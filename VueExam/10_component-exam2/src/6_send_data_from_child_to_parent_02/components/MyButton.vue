<template>
    <div class="btn" >
        <slot></slot> 
    </div>
    <h1 @click="onClick">클릭</h1>
    <!-- 실제 클릭 이벤트는 여기서 발생함. emits : ["myclk"] 등록된 이름을 가져다가 <my-button @myclk="log"> 부모에게 알려줌  -->
    <input type="text" />
</template>

<script>
    export default {
        emits : ["myclk"], //프로퍼티 생성. 값이 1개라서 대괄호 사용.
        methods : {
            onClick(){ // onClick()이라는 함수를 만들어서 <h1 @click="$emit('myclk', 'message')"> 대신 <h1 @click="onClick"> 이렇게 호출한다.
                this.$emit('myclk', 'message')
            }
        }
    }
</script>

<style scoped>
    .btn {
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
    }
</style>