<template>
    <header-component title="읽기 페이지"></header-component>
    <div>
        <ul>
            <p>선택된 메모 = {{currentMemo}}</p>
        </ul>
    </div>
    <div>
        <button @click="setMode(MODE.LIST)">리스트 페이지로 이동</button> 
    </div>
    <footer-component></footer-component>
</template>

<script>
import {MODE} from "../common"

    export default {
        props : {
            currentMemo : { // current-memo 특수기호가 들어가면 카멜표기법으로 작성
                type : String,
                default : ""
            },
            setMode : {
                type : Function,
                default : ()=>{
                    console.log("이 함수는 재설정을 해야합니다.");
                }
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