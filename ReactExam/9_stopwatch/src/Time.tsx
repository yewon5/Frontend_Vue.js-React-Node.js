import * as React from 'react';

interface IProps { seconds : number}

//만들어진 시간을 전달만 받게끔
const Time:React.FC<IProps> = ({seconds}) => {
return <div>{seconds}</div>
}

export default Time;