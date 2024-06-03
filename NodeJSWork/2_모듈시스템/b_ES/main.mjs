//모듈을 가져다 쓰기 위한 메인
//$ node main.js
import { HelloWorld } from "./function.mjs";

HelloWorld(); //Hello World
// SyntaxError: Cannot use import statement outside a module
// import를 불러올때는 확장자를 mjs 만들어야 모듈을 사용할 수 있음

