import * as React from 'react';

//1개 상품에 대한 구성
interface Item {
    name : string;
    price : number;
}

//
interface State {
    items : Item[];
    total : number;
    [key:string] : any
}

//상품 목록 배열로
const initialState:State = {
    items : [
        {name : "cap", price:10},
        {name : "shoes", price:30},
        {name : "bag", price:20}
    ],
    total : 0,
}

interface CheckBoxProps {
    name : string;
    price : number;
    isChecked : boolean;
    onChange : () => void;
}

//dispatch에서 보내준 액션
interface Action {
    type : string;
    payload : string; //어떤체크박스인지 이름을 가져옴(cap,shoes,bag 등)
}

const reducer = (state:State, action:Action):State => {
    switch(action.type){
        case "TOGGLE_ITEM":
            const selectedItem = state.items.find((item)=>item.name === action.payload)!; 
            //어떤 체크박스? find()함수 사용해서 비교하고 selectItem에 저장. 
            //! 절대로 null값이 생기지 않으니까 걱정마! 
            const isItemChecked = state[action.payload] //isItemChecked 상품명을 넘겨받았으니 T

            return {
                //State타입 : 각각의 물건들(현재 전체 데이터), 전체가격(total 변수에는 전체 가격), 체크여부
                ...state, //전개연산자 : 데이터 병합, 원본의 배열을 보존하고 복사본을 생성
                total:isItemChecked ? state.total - selectedItem.price : state.total + selectedItem.price, 
                [action.payload] : !isItemChecked
            } 
            //체크여부에 따라서 더하거나 빼거나, 합계 계산
            //체크여부는 어디서 확인함? interface State { [key:string] : any }
            //리턴값은 State형식이어야됨
        
        default:
            return state;
    }
}

const App4:React.FC = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState); //state는 상품의 목록(initialState)을 갖고있음

    //어떤 체크박스가 선택됐는지 전달 받아야함(itemName)
    const changeHandler = (itemName:string) => {
        dispatch({type : "TOGGLE_ITEM", payload : itemName})
    }

    return (
        <div>
            <h1>Total : {state.total}</h1>
            {/* Checkbox를 반복 돌려서 상품이 보여지게끔, map() 컬렉션/객체/배열에 유용한 함수 */}
            {
                state.items.map((item:any)=>( 
                    <Checkbox name={item.name} price={item.price} 
                    isChecked={state[item.name]} onChange={()=>{changeHandler(item.name)}}/>
                )) 
                //items의 개수만큼 map 함수를 호출 ()에는 함수처리, 매개변수(item)
                //isChecked={state[item.name]} state 객체에서 item.name에 해당하는 속성의 값을 가져오는 것
                
            }
        </div>
    )
}


//원래는 컴포넌트 파일을 따로 만들어야하지만 편의상 같은 파일에 만든다.
const Checkbox:React.FC<CheckBoxProps> = ({name, price, isChecked, onChange}) => {
    return (
        <div>
            <label><input type="checkbox" checked={isChecked} onChange={onChange}/>{name} {price}</label>
        </div>
    )
}

export default App4;