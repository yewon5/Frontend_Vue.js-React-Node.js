# 1. 리액트란? 
사용자 인터페이스를 만들기 위한 Javascript 라이브러리이다.

- virtual DOM
- Component
    - 리액트로 이루어진 앱을 이루는 최소한의 단위
    - 클래스형 컴포넌트, 함수형 컴포넌트


# 2. 프로젝트 구성 방법
## (1) 직접 작성
## (2) CRA (Create React App)
- npx create-react-app 프로젝트명 (타입스크립트 없이 실행)
- npx create-react-app 프로젝트명 --template typescript
## (3) Online Code Tool (test용)
    - CodeSandbox


# 3. TypeScript 
- JS를 도와주는 언어
- JS Static TypeChecker (int i;)
- JS의 Superset
- MS에서 만든 Opensource

## (1) 실습 준비
### 1) 프로젝트 만들기
    - npm init (초기화)
    - npm i -D typescript (install, -D 개발용)

### 2) 코드 작성 및 실행
    - .ts파일을 작성하고 tsc로 컴파일
    - npx tsc ts파일명

## (2) 기본 타입들
    - number
    - string
    - boolean
    - array
    - object
    - enum
    - any
    - unknown
    - void
    - never
    - null
    - undefined

## (3) Function
    - parameter type
    - return type

## (4) Union & Intersection
    - union
        * 여러 타입들 중 하나
        * OR (|) 연산자

    - intersection
        * 여러 타입을 하나로 결합
        * AND (&) 연산자

## (5) Type Alias & Interface
타입에 대한 정의를 저장하여 재사용성을 높이는 타입 정의

# 4. 리액트 메뉴얼 설치
[*] ESlint & Prettier : Linter & Formatter
- js코드 작성 시 놓치는 부분을 도와주는 툴
- 주로 코드 컨벤션, 문법적 오류, 포맷팅 등을 도와준다.
    - ESlint https://eslint.org
        - npm init @eslint/config@latest

    - Prettier : https://prettier.io
        - npm install --save-dev --save-exact prettier

    - eslint-config-prettier 플러그인 설치 https://github.com/prettier/eslint-plugin-prettier
        - npm install --save-dev eslint-plugin-prettier eslint-config-prettier

[*] TypeScript : Static
- Typechecker : 정적 타입 검사기로, 코드의 타입을 확인하여 오류를 방지하고 타입 안정성을 확보
    - TypeScript https://www.typescriptlang.org
        - npm install typescript --save-dev

[*] Babel : Transpiler
- 최신 문법의 JS를 특정 버전의 JS로 변환해주는 툴
- 현재 작성된 코드가 다양한 환경에서 호환될 수 있도록 도와주는 툴
- 특히 리액트에서는 JSX문법을 JS로 변환해주는 역할
    - https://babeljs.io
        - npm install --save-dev @babel/core @babel/cli
        - npm install --save-dev babel-loader
        - npm install @babel/preset-env --save-dev
            - babel.config.json 파일 생성후 {"presets": ["@babel/preset-env"]} 코드 작성


[*] Webpack : bundler
- 실제 프로젝트를 만들어 준다. 방대해진 JS 프로젝트 코드를 최적의 조건으로 전달할 수 있도록 프로젝트 코드를 모아서 적절한 기준으로 나눠 파일에 담는 역할
    - https://webpack.js.org
        - npm install webpack webpack-cli --save-dev
        - npm install ts-loader --save-dev

[*] 리액트
- npm i react react-dom
- npm i -D @types/react @types/react-dom

[ ] webpack-dev-server
- 개발 서버로, 개발 중인 애플리케이션을 로컬 서버에 호스팅하여 빠르고 쉽게 개발할 수 있도록 도와주는 역할

# 5. 기본 키워드
### (1) virtual DOM
- 화면에 렌더링되지 않고, 메모리에만 존재하는 DOM (Real DOM의 복사본)
- DOM 변경사항 : virtual DOM -> Real DOM

### (2) ReactElement
- virtual DOM에 HTML을 그려줄 수 있는 도구
- React.createElement(type, [props], [...Child]);

### (3) JSX
- Javascript + xml
- 코드를 줄이고 View를 직관적으로 상상할 수 있게 도움을 준다.
- 주의할점 및 특징
    - Babel을 통해서 JSX -> JS로 Trenspiling이 된다.
    - 시작과 끝 태그가 반드시 한쌍으로 묶여야 한다.
    - 반드시 하나의 요소로 표현해야 한다.
    - 중괄호를 이용해서 JS표현식을 사용할 수 있다.

### (4) ReactComponent

# 6. ReactComponent
## (1) 기본 동작
### 1) props
- 외부에서 주입되는 데이터 (부모 -> 자식)
- 수정할 수 없다. (변경하고 싶을 땐 부모 값을 변경해야함 자식은 변경 불가)
- 함수의 인자와 비슷하다.

### 2) state
- 컴포넌트안에서 생성되며, 내부에서만 사용가능한 객체
- 수정 가능
- 함수내의 변수와 비슷

### 3) Hook API
Hook는 컴포넌트 외부로 렌더로직을 분리하기 위한 수단으로 로직의 재사용성을 높이며 Function Component 적합하다.
- useState
    - [상태값, 상태변경함수] = useState(초기값) 
    - 상태값에는 가장 최신의 값이 저장된다.
- useEffect
    - useEffect(함수, [의존성]) //의존성 : []배열안에 있는 데이터가 변경되었을때만 함수를 실행함(무조건 최초 1회는 실행됨)
    - 호출하면 결과값을 함수로 받음
    - 함수를 리턴해야함 (clean-up)
        - 모든 Render마다 -> 의존성 체크 -> clean-up(의존성 체크 후 데이터가 변경됐을때) -> useEffect 실행
    - LifeCycle과 연관 (useEffect를 통해서 LifeCycle 구현)
        - Class Component LifeCycle
        - mounting　　constructor -> render -> componentDidMount
        - updating　　　　　　　　　  render -> componentDidUPdate
        - unmounting　　　　　　　　　　　　    componentWillUnmount
        - Function Component LifeCycle
        - mounting　　Run Function -> useEffect 실행
        - updating　　Run Function -> useEffect 실행 //최초 1회는 실행
        - unmounting　　　　　　　　   clean-up 실행
- useMemo
    - 리턴하는 값은 값 자체이다. 이 값을 Memoization 한다
- useCallback
    - 리턴하는 값은 함수 자체이다. 이것을 Memoization 한다.
- useReducer p.184
    - const [state, dispatch] = useReducer(함수, 초기값)