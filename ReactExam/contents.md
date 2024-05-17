# 1. 리액트란? 
사용자 인터페이스를 만들기 위한 Javascript 라이브러리이다.

- virtual DOM
- Component
    - 리액트로 이루어진 앱을 이루는 최소한의 단위
    - 클래스형 컴포넌트, 함수형 컴포넌트


# 2. 프로젝트 구성 방법
## (1) 직접 작성
## (2) CRA (Create React App)
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