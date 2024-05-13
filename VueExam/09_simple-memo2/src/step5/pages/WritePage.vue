<template>
    <header-component title="글쓰기 페이지"></header-component>
    <div>
        <textarea rows="5" v-model="memo"></textarea>
        <div>
            <button @click="setMode(MODE.LIST)">취소</button>
            <button @click="onAddMemo">저장</button>
        </div>
    </div>
    <footer-component></footer-component>
</template>

<script>
import {MODE} from "../common"

    export default {
        data() {
            return {
                memo: "" // 입력된 메모를 저장할 변수
            };
        },
        props : {
            addMemo : {
                type : Function,
                default : () => {}
            },
            setMode : {
                type : Function
            }
        },
        methods: {
            onAddMemo() {  // 사용자가 입력한 메모를 부모 컴포넌트로 전달
                if(this.memo.length != 0){
                    this.addMemo(this.memo);
                }
                else{
                    alert("내용을 입력해주세요!!!!")
                    return;
                }

                this.setMode(MODE.LIST); // 저장버튼 누르면 리스트페이지로 이동 (체크)
                
                this.memo = ''; // 입력 창 초기화
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