// number
let num1 = 123;
// :number -> 주석(annotation)으로 타입을 명시
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN; // Not a Number
// num1 = "hello"; // 오류 발생: Type 'string' is not assignable to type 'number'
// num1.toUpperCase(); // 오류 발생: Property 'toUpperCase' does not exist on type 'number'
num1.toFixed(2); // 정상: toFixed는 number 타입의 메서드
///////////////////////////////////////////////////////////////////
// string
let str1 = "hello";
let str2 = "hello"; // 작은 따옴표와 큰 따옴표 모두 사용 가능
let str3 = `hello`; // 템플릿 리터럴
let str4 = `hello ${num1}`; // 문자열 보간법
// str1 = 123; // 오류 발생: Type 'number' is not assignable to type 'string'
// str1.toFixed(2); // 오류 발생: Property 'toFixed' does not exist on type 'string'
str1.toUpperCase(); // 정상: toUpperCase는 string 타입의 메서드
///////////////////////////////////////////////////////////////////
// boolean
let bool1 = true;
let bool2 = false;
///////////////////////////////////////////////////////////////////
// null
let null1 = null;
///////////////////////////////////////////////////////////////////
// undefined
let unde1 = undefined;
///////////////////////////////////////////////////////////////////
// let numA: number = null;
// null을 number 타입에 할당할 수 없었지만
// tsconfig.json에서 strictNullChecks가 false 설정시 오류가 발생하지 않음
///////////////////////////////////////////////////////////////////
// 리터럴 타입
// 리터럴 -> 특정 값으로 고정된 타입
let numA = 10;
// 타입으로 정의된 값 외에는 다른 값 지정 불가
// numA = 12;
let strA = "hello";
let boolA = true;
export {};
