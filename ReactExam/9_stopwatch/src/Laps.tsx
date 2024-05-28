import * as React from 'react'
import { ILap } from './hooks/useStopwatch';
import styled from '@emotion/styled';

interface IProps { 
    nextLap : ILap; //가장 최신의 기록
    laps : ILap[]; //과거의 기록
}

const Laps:React.FC<IProps> = ({nextLap, laps}) => { 
    return (
        <div>
            <Box>
                <span>{nextLap.title}</span>
                <span>{nextLap.lapTime}</span>
            </Box>
            { 
                laps.map(
                    (lap)=> {
                        return (
                            <div key={lap.id}>
                                <Box>
                                    <span>{lap.title}</span>
                                    <span>{lap.lapTime}</span>
                                </Box>
                            </div>
                        )
                    }
                )
            }
            {/* map() 랩 눌렀을때 기록되는 값을 저장할 반복문(배열이라서). 
            중간에 수정/삭제가 되지 않고 계속 추가만 되기 때문에 인덱스를 key값으로 설정해도 됨. 
            현재는 인터페이스로 만든 id값을 등록 */}
        </div>
    )
}

const Container = styled.div`
    flex : 1;

    display:flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    overflow : auto;
`

const Box = styled.div`
    display: flex;
    color: white;
    font-size: 24px;

    padding: 20px;

    align-items: center;
    justify-content: space-between;
`;

export default Laps;