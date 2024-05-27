import * as React from 'react'
import { ILap } from './hooks/useStopwatch';

interface IProps { 
    nextLap : ILap; //가장 최신의 기록
    laps : ILap[];
}

const Laps:React.FC<IProps> = ({nextLap, laps}) => {
    return (
        <div>
            <div>{nextLap.title} with {nextLap.seconds}</div>
            { 
                laps.map( (lap)=> {return <div key={lap.id}>{lap.title} with {lap.seconds}</div>} )
            }
            {/* map() 랩 눌렀을때 기록되는 값을 저장할 반복문(배열이라서). 
            중간에 수정/삭제가 되지 않고 계속 추가만 되기 때문에 인덱스를 key값으로 설정해도 됨. 
            현재는 인터페이스로 만든 id값을 등록 */}
        </div>
    )
}

export default Laps;