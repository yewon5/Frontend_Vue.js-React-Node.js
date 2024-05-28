import * as React from 'react';
import { STATUS } from './hooks/useStopwatch';
import styled from '@emotion/styled';
import Button from './utils/Button';

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
        <Container>
            { 
                state === STATUS.PROCESSING ?
                <>
                    <div>
                        <Button type="NORMAL" onClick={record}>랩</Button>
                        <Button type="ERROR" onClick={stop}>정지</Button>
                    </div>
                </>
                :
                <>
                    <div>
                        <Button type="NORMAL" onClick={reset}>초기화</Button>
                        <Button type="SUCCESS" onClick={start}>시작</Button>
                    </div>
                </>
            }
        </Container>
    )
}

const Container = styled.div`
    flex : none;

    display : flex;
    padding : 30px;
    justify-content : space-between;
    align-items : center;

    border-bottom : 1px solid #fff;
`

export default Controllers;