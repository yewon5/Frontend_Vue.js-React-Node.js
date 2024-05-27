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
}

// Stopwatch에서 갖고있어야 할 값 hooks에서 관리
interface IuseStopwatchReturnType {
    seconds : number;
    
    status : STATUS; //Controllers.tsx의 state === "Processing" 상태 값
    //버튼의 대한 정보
    start : () => void; 
    stop : () => void; 
    reset : () => void; 
    record : () => void; 

    lasp : ILap;
}

const useStopwatch = () => {
    const [seconds, setSeconds] = React.useState(0);
    const [status, setStatus] = React. useState<STATUS>(STATUS.PROCESSING);
    const [laps, setLaps] = React.useState<ILap[]>([]);

    //useCallback 성능향상을 위한 hooks, 데이터가 변경되기전까지는 가져다 쓸 수 있도록
    const start = React.useCallback(() => {}, []) 
    const stop = React.useCallback(() => {}, []) 
    const reset = React.useCallback(() => {}, []) 
    const record = React.useCallback(() => {}, []) 

    window.setInterval(함수, MILLISEC_PER_SECOND); // 간격만큼 함수를 계속 호출, 1000이라고 적어도 되지만 상수를 이용하여 재사용 한다.

    return {
        seconds, status, laps, start, stop, reset, record
    };
}

export default useStopwatch;