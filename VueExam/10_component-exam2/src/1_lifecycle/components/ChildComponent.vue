<template>
    <div class="child">
        Child 컴포넌트
        <div>
            <p>data.count = {{count}}</p>
            <p>props.prop = {{prop}}</p>
        </div>
        <div>
            <button @click="count++"> data 변경 </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { count: 0 }
        },
        props : {
            prop : {
                type : String,
            }
        },
        //객체 생성 전/후
        beforeCreate(){
            console.log("2.beforeCreate : ", this.$options.name) // 자식은 2로 표시, 
        },
        created(){
            console.log("2.created : ", this.$options.name)
        },
        //마운트 전/후
        beforeMount(){
            console.log("2.beforeMount : ", this.$options.name)
        },
        mounted(){
            console.log("2.mounted : ", this.$options.name)
        },
        beforeUpdate(){
            console.log("2.beforeUpdate : ", this.$options.name)
        },
        updated(){
            console.log("2.updated : ", this.$options.name)
        }
    }
</script>

<style scoped>
    .child {
        border : 1px solid rosybrown;
        margin : 10px;
    }
</style>