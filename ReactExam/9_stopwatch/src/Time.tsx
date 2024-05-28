import styled from '@emotion/styled';
import * as React from 'react';
import { stopWatchTime } from './utils/stopWatchTime';

interface IProps { seconds : number}

//만들어진 시간을 전달만 받게끔
const Time:React.FC<IProps> = ({seconds}) => {
return <Container>{stopWatchTime(seconds)}</Container>
}

const Container = styled.div`
    color : white;
    font-size : 60px;
    flex : 1;

    display : flex;
    justify-countent : center;
    align-items : center;
`

export default Time;