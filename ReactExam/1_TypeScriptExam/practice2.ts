//// Function ////

// 1. Function Statenent
function add(a:number, b:number):number{
    return a + b;
}

const result:number = add(1, 3);

// 2. Function Expression(arrow function)
const result1 = (a:number, b:number):number => a + b //{ return a + b } 중괄호, return 생략 가능
const result2 : (a:number, b:number) => number = (a, b) => a + b;
const result3 : (a:number, b:number) => number =
    function(a:number, b:number):number { return a + b }
    
// --------------------------------------------------------- //

//// Union & Intersection ////
// Union
function printValue(value:number | string | string[]):void{
    console.log(value);
}

printValue(1);
printValue("10");
printValue(["1", "2"]);
// | or연산자로 여러개 타입을 지정할 수 있다.

// Intersection
const inter:{name:string, age:number} & {height:number, weight:number} = {
    age : 20,
    height : 170,
    weight : 70,
    name : "John"
}

// --------------------------------------------------------- //

//// Type Alias & Interface ////
// 1. Type Alias 간단하게 사용할 경우
type NUM = number // 타입에 별명 지정

let num1:number = 1;
let num2:NUM = 2

type unionType = number | string | string[]
function printValue1(value:unionType):void{ // 위에 만들었던 함수를 별명을 통해서 간단하게 
    console.log(value);
}

type info1 = {name:string, age:number};
type info2 = {height:number, weight:number};
type info3 = {name:string, age:number} & {height:number, weight:number}
const inter1:info3 = { //info1 & info2를 더 간단하게
    age : 20,
    height : 170,
    weight : 70,
    name : "John"
}

// 2. Interface 규모가 있거나 복잡한 경우
interface IUser {
    age : number,
    height : number,
    weight : number,
    name : string
}
const user1:IUser = {
    age : 20,
    height : 170,
    weight : 70,
    name : "John"
}