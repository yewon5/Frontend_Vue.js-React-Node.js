import * as React from 'react';
import { INTERVAL, MILLISEC_PER_SECOND } from './constants';

//여러개중에서 1개를 선택할 수 있도록 열거형으로
export enum STATUS { //다른곳에서도 사용하기위해 export 해준다.
    PROCESSING,
    STOP
}

//인터페이스 앞에는 I를 붙이는 게 관례
export interface ILap {
    id : number;
    title : string;
    seconds : number;
    lapTime : number;
}

// Stopwatch에서 갖고있어야 할 값 hooks에서 관리
export interface IuseStopwatchReturnType {
    seconds : number;
    
    status : STATUS; //Controllers.tsx의 state === "Processing" 상태 값
    //버튼의 대한 정보
    start : () => void; 
    stop : () => void; 
    reset : () => void; 
    record : () => void; 

    nextLap : ILap; //가장 최신의 기록
    laps : ILap[]; //과거의 기록
}

const useStopwatch = () => {
    const [seconds, setSeconds] = React.useState(0);
    const [status, setStatus] = React. useState<STATUS>(STATUS.PROCESSING);
    const [laps, setLaps] = React.useState<ILap[]>([]);
    
    const nextLap = React.useMemo<ILap>(() => {
            return  {
                id : laps.length + 1, // 기록에 대한 전체데이터
                title : '랩 ', 
                seconds : seconds,
                lapTime : seconds - (laps[0]?.seconds ?? 0) // 현재 흘러간 시간에서 중지버튼 누를때마다 나는 시간 차이 
                //최상단 값이 없으면 0이고 그렇지 않으면 세컨드값을 빼주겠다
            }
    }, [seconds, laps])
    
    /*
    //타입을 매칭시켜주는 게 중요한 거지 꼭 useMemo를 사용하지 않아도 됨. 성능차이
    const nextLap : ILap = {
        id : laps.length + 1, // 기록에 대한 전체데이터
        title : '랩 ', 
        seconds : seconds,
        lapTime : seconds - (laps[0]?.seconds ?? 0) // 현재 흘러간 시간에서 중지버튼 누를때마다 나는 시간 차이 
        //최상단 값이 없으면 0이고 그렇지 않으면 세컨드값을 빼주겠다
    }
    */

    //useCallback 성능향상을 위한 hooks, 데이터가 변경되기전까지는 가져다 쓸 수 있도록. 새로운 함수가 필요하다면, 의존성 배열에 해당 값을 추가
    const start = React.useCallback(() => {
        if(status !== STATUS.STOP){
            return;
        }
        setStatus(STATUS.PROCESSING)
    }, [status]);

    const stop = React.useCallback(() => {
        if(status !== STATUS.PROCESSING){
            return;
        }
        setStatus(STATUS.STOP)
    }, [status]);


    const reset = React.useCallback(() => {
        if(status !== STATUS.STOP){
            return;
        }
        setSeconds(0);
        setLaps([]);
    }, [status]); 

    const record = React.useCallback(() => {
        if(status !== STATUS.PROCESSING){
            return;
        }
        setLaps((prev)=>{return [nextLap, ...prev]}) 
        //기존 데이터를 수정하는게 아니라 추가하기때문에 prev를 사용해 기존의 데이트를 가져와야 함.
    }, [status, nextLap]) 

    React.useEffect(()=>{ 
        let intervalId : number;

        //시작 버튼 눌렀을 때 실행되야하니까
        if(status === STATUS.PROCESSING){
            intervalId = window.setInterval(()=>{setSeconds((prev)=>prev + INTERVAL / MILLISEC_PER_SECOND)}, INTERVAL); 
            // 간격만큼 함수를 계속 호출, prev는 seconds 값을 1000분의 1초 단위로 계속 전달받을 수 있도록
            // 1000이라고 적어도 되지만 상수를 이용하여 재사용 한다.
            // prev + 0.01 이렇게 할 경우 단위가 바뀌면 재사용하기 힘들기 때문에 상수로 계산식으로 만든다.
        }

        return () => {
            clearInterval(intervalId); 
            //오류 나는 이유 : 호출될때마다 id가 바뀌기때문에 const로 하면 안됨, 조건문 안에서 지역변수이기 때문에, let 전역 변수로 선언한다
        }
    }, [status]);
    //의존성에는 뭐가 들어가면 좋을까? 언제 이 함수를 호출할까?
    //status 값이 변경될 때마다 useEffect가 동작하게 해야 되므로 [status]
    //useEffect 리턴값에는 clean-up기능이 있다. return () => {} 내부적으로 동작에 의해서 자동으로 호출하는 함수

    return {
        seconds, status, laps, start, stop, reset, record, nextLap
    };
}

export default useStopwatch;