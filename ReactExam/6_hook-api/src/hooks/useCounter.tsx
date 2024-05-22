import * as React from 'react';

//카운터 +, - 기능 분리 : 저장할 변수, 증가/감소 함수 준비
interface useCounterReturn{
    count : number;
    plus : ()=>void; //카운트만 증가시키면되니까 리턴값은 필요 없음
    minus : ()=>void;
}

export function useCounter():useCounterReturn{
    const[count, setCount] = React.useState(0); // 2개의 변수니까 배열로

    const plus = React.useCallback(()=>setCount((prev)=>prev + 1), []);
    const minus = React.useCallback(()=>setCount((prev)=>prev - 1), []);

    return {
        count,
        plus,
        minus
    };
}

//분리 시킨 코드는 메인페이지에서 어떻게 가져다 쓸까?
//export, import : const{count, plus, minus} = useCounter();
