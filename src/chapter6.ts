// any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10; // any 타입은 모든 타입을 허용
anyVar = "hello"; // any 타입은 문자열도 허용
anyVar = true;
anyVar = {};
anyVar = () => {}; // 함수도 허용

anyVar.toUpperCase();
// 문자열 메서드 사용 가능 하지만, 런타임 에러 발생 가능성 있음
// any 타입은 타입스크립트가 타입 검사하는 점을 무시하게 만듬

anyVar.toFixed();

let num: number = 10;
num = anyVar; // any 타입은 number 타입에 할당 가능

// let anyVar = 10;
// anyVar = 'hello'; // 원래라면 'string'형식은 'number' 형식에 할당불가능

////////////////////////////////////////////////////////////

// unknown
let unKnownVar: unknown;

// unknown 타입은 모든 타입을 허용하지만, any와 다르게 타입 검사를 유지함

unKnownVar = "";
unKnownVar = 1;
unKnownVar = () => {};

// num = unKnownVar; // unknown 타입은 number 타입에 할당 불가능
// unKnownVar.toUpperCase(); // unknown 타입은 메서드 사용 불가능

if (typeof unKnownVar === "number") {
  num = unKnownVar; // 타입 검사를 통해 number 타입으로 변환 가능
}
