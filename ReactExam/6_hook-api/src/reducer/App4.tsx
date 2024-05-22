import * as React from 'react';

interface Item {
    name : string;
    price : number;
}

interface CheckBoxProps {
    name : string;
    price : number;
    isChecked : boolean;
    onChange : () => void;
}
/*
const App4:React.FC = () => {
    return (
        <div>
            <h1>Total : </h1>
            <Checkbox name={Item.name}></Checkbox>
            <Checkbox></Checkbox>
            <Checkbox></Checkbox>
        </div>
    )
}


//원래는 컴포넌트 파일을 따로 만들어야하지만 편의상 같은 파일에 만든다.
const Checkbox:React.FC<CheckBoxProps> = ({name, price, isChecked, onChange}) => {
    return (
        <div>
            <label><input type="checkbox" />{name}</label>
        </div>
    )
}


export default App4;
*/