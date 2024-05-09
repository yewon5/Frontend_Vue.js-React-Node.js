<template>
    <div>
        <div>
            <Button @click="onToggle">토글-{{sw}}</Button>&nbsp;
            <Button @click="addMessage">데이터 변경</Button>
        </div>
        <br>
        <div> 1. message = {{message}} </div>
        <div> 2. computed = {{reverseMessage}} </div>
        <div> 3. methods = {{reverseMessage2()}} </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                message : "1, 2, 3, 4, 5, 6, 7",
                sw : false,
                count : 7
            }
        },
        methods : { // 계속 재호출됨
            onToggle(){
                this.sw = !this.sw
            },
            addMessage(){
                this.count++;
                this.message += ", " + this.count;
            },
            reverseMessage2(){
                return this.message.split(",").reverse().join("_")
            }
        },
        computed : { // 데이터가 들어오면 호출됨 데이터의 변화가 없으면 재호출되지 않음
            reverseMessage(){
                return this.message.split(",").reverse().join("_")
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>