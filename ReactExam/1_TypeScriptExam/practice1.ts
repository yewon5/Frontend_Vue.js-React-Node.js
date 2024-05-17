// 타입스크립트에서는 타입을 지정하지 않으면 오류 발생
//// number, string, boolean ////
let num:number =  10; // 웹브라우저는 :number을 해석할 수 없어서 오류가 발생하기 때문에 tsc로 컴파일해야 한다. /npx tsc ts파일명
num = 3.14; // num이라는 변수는 number로 타입을 지정했기때문에 숫자만 가능하다.

const str:string = "10";

const bool:boolean = true;

// --------------------------------------------------------- //

//// array, object, enum ////
const arr_num:number[] = [1, 2, 3, 3.14]; // number데이터의 타입과 []배열 형식. 실수 정수 구분하진 않음
const arr_bool:boolean[] = [true, true, false]; // T or F만 가능

const user:{name:string, age:number, married:boolean} = {
    name : "홍길동",
    age : 20,
    married: true
}

// 배열과 객체를 합친 거라고 볼 수 있다. 별도의 내가 원하는 자료형을 따로 만들 수 있다
enum GRADE {A, B, C, D, F} // 요일, 학점 등 카테고리로 묶을 수 있는 것
let myGrade:GRADE = GRADE.A; // A, a, a학점과 같이 데이터를 넣을 때 일관성이 없을 수 있다. 열거형 GRADE를 .으로 접근해서 데이터를 꺼내온다.
myGrade = 2; // 인덱스를 사용할 수 있다.

// --------------------------------------------------------- //

//// any, unknown ////
let anyValue:any = 1; 
anyValue = "10";
anyValue = true; // 어떤 타입이든 올 수 있다. var와 비슷


let unknownValue:unknown = 1;
unknownValue = "10";
unknownValue = true;

// 두 개가 비슷해 보이지만 잘못된 코드를 방지하고 체크해주는 unknown을 주로 사용한다.
anyValue.func();
//unknownValue.func(); // func()라는 함수가 없기때문에 오류

// --------------------------------------------------------- //

//// void, never 함수와 관련된 키워드 ////
function hello():void{ // 리턴값이 없을때, 리턴하면 안될때 void키워드 사용
    console.log("Hello");
    //return "hello"; 
}

function hello2():string{ // 리턴값은 문자열, 함수의 반환형을 지정할 수 있다.
    //while(true){}
    return "hello";  
    // Unreachable code detected.ts(7027)
    // 무한루프라서 리턴이 절대로 실행 안 된다는 오류 문구
}

function hello3():never{ 
    // 함수를 호출(실행)한 위치에서(스택에 주소를 저장해 놓고) 
    // 함수를 만든 위치로 메모리 점프해서 함수 코드 실행 후 
    // 다시 원위치(함수 호출 위치)로 돌아가는데 원위치로 못 돌아가게 하는 것. 
    console.log("Hello");
    //return "hello"; 
    //while(true){} // 1. 무한 반복을 만들어서 코드가 끝나지 않게 한다. 
    throw 'Error'; // 2. 일부러 에러를 발생 시켜서 시스템이 처리하게 한다
}

// --------------------------------------------------------- //

//// null, undefined ////
const nullValue:null = null
const undefinedValue:undefined = undefined;

//const nullValue:null = undefined
//const undefinedValue:undefined = null;
// null 값을 엄격하게 구분하고 싶을때는 tsconfig.json 설정파일에서 "strictNullChecks": true 옵션을 추가한다.