<template>
    <div class="btn" >
        <slot></slot> 
    </div>
    <h1 @click="onClick">클릭</h1>
    <!-- 실제 클릭 이벤트는 여기서 발생함. emits : ["myclk"] 등록된 이름을 가져다가 <my-button @myclk="log"> 부모에게 알려줌  -->
    <input type="text" v-model="msg"/>
    <!-- 양방향 전달을 위해 v-model="" 사용. data(){}를 통해서 '클릭'을 했을 때 'this.msg' 텍스트 전달 -->
</template>

<script>
    export default {
        emits : ["myclk"], //프로퍼티 생성. 값이 1개라서 대괄호 사용.
        data(){
            return {msg : ""}
        },
        methods : {
            onClick(){ // onClick()이라는 함수를 만들어서 <h1 @click="$emit('myclk', 'message')"> 대신 <h1 @click="onClick"> 이렇게 호출한다.
                this.$emit('myclk', this.msg) // 부모에게 전달
            }
        },
        watch: { //이벤트가 발생하거나 데이터가 변경되는 것을 감지 p190
            msg(){ //msg라는 양방향 변수가 값이 바뀔때마다 호출됨
                this.$emit('changeMsg', this.msg) // 부모에게 전달
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