import * as React from 'react';
import { STATUS } from './hooks/useStopwatch';

//랩    정지, 초기화    시작
interface IProps { 
   state : STATUS; //상태에 따라서 랩/정지, 초기화/시작이 보여지게끔
   record : () => void;
   stop : () => void;
   reset : () => void;
   start : () => void;
}

const Controllers:React.FC<IProps> = ({state, record, stop, reset, start}) => {
    return (
        <div>
            { 
                state === STATUS.PROCESSING ?
                <div>
                    <button onClick={record}>랩</button>
                    <button onClick={stop}>정지</button>
                </div>
                :
                <div>
                    <button onClick={reset}>초기화</button>
                    <button onClick={start}>시작</button>
                </div>
            }
        </div>
    )
}

export default Controllers;