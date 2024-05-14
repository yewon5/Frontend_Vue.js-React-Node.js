<template>
    <div class="parent">
        Parent 컴포넌트
        <div>
            <p>data.count = {{count}}</p>
            <p>props.prop = {{prop}}</p>
        </div>
        <div>
            <button @click="count++"> data 변경 </button>
            <button @click="prop++"> props 변경 </button>
        </div>
        <child-component :prop="prop"></child-component>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

    export default {
        components: { ChildComponent },
        data() {
            return { count: 0, prop: 0 }
        },
        //객체 생성 전/후
        beforeCreate(){
            console.log("1.beforeCreate : ", this.$options.name) // 부모는 1로 표시, 
        },
        created(){
            console.log("1.created : ", this.$options.name)
        },
        //마운트 전/후
        beforeMount(){
            console.log("1.beforeMount : ", this.$options.name)
        },
        mounted(){
            console.log("1.mounted : ", this.$options.name)
        },
        beforeUpdate(){
            console.log("1.beforeUpdate : ", this.$options.name)
        },
        updated(){
            console.log("1.updated : ", this.$options.name)
        }
    }
</script>

<style scoped>
    .parent {
        border : 1px solid royalblue;
        margin : 10px;
    }
</style>