// 타입스크립트에서는 타입을 지정하지 않으면 오류 발생
// number, string, boolean //
var num = 10; // 웹브라우저는 :number을 해석할 수 없어서 오류가 발생하기 때문에 tsc로 컴파일해야 한다. /npx tsc ts파일명
num = 3.14; // num이라는 변수는 number로 타입을 지정했기때문에 숫자만 가능하다.
var str = "10";
var bool = true;
// --------------------------------------------------------- //
//array, object, enum
var arr_num = [1, 2, 3, 3.14]; // number데이터의 타입과 []배열 형식. 실수 정수 구분하진 않음
var arr_bool = [true, true, false]; // T or F만 가능
var user = {
    name: "홍길동",
    age: 20,
    married: true
};
// 배열과 객체를 합친 거라고 볼 수 있다. 별도의 내가 원하는 자료형을 따로 만들 수 있다
var GRADE;
(function (GRADE) {
    GRADE[GRADE["A"] = 0] = "A";
    GRADE[GRADE["B"] = 1] = "B";
    GRADE[GRADE["C"] = 2] = "C";
    GRADE[GRADE["D"] = 3] = "D";
    GRADE[GRADE["F"] = 4] = "F";
})(GRADE || (GRADE = {})); // 요일, 학점 등 카테고리로 묶을 수 있는 것
var myGrade = GRADE.A; // A, a, a학점과 같이 데이터를 넣을 때 일관성이 없을 수 있다. 열거형 GRADE를 .으로 접근해서 데이터를 꺼내온다.
myGrade = 2; // 인덱스를 사용할 수 있다.
// --------------------------------------------------------- //
// any, unknown
var anyValue = 1;
anyValue = "10";
anyValue = true; // 어떤 타입이든 올 수 있다. var와 비슷
var unknownValue = 1;
unknownValue = "10";
unknownValue = true;
// 두 개가 비슷해 보이지만 unknown을 주로 사용한다. 잘못된 코드를 방지하고 체크해줌
anyValue.func();
//unknownValue.func(); // func()라는 함수가 없기때문에 오류
// --------------------------------------------------------- //
