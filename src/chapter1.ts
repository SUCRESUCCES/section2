// number
let num1: number = 123;
// :number -> 주석(annotation)으로 타입을 명시
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN; // Not a Number

// num1 = "hello"; // 오류 발생: Type 'string' is not assignable to type 'number'
// num1.toUpperCase(); // 오류 발생: Property 'toUpperCase' does not exist on type 'number'

num1.toFixed(2); // 정상: toFixed는 number 타입의 메서드

///////////////////////////////////////////////////////////////////

// string
let str1: string = "hello";
let str2: string = "hello"; // 작은 따옴표와 큰 따옴표 모두 사용 가능
let str3: string = `hello`; // 템플릿 리터럴
let str4: string = `hello ${num1}`; // 문자열 보간법

// str1 = 123; // 오류 발생: Type 'number' is not assignable to type 'string'
// str1.toFixed(2); // 오류 발생: Property 'toFixed' does not exist on type 'string'

str1.toUpperCase(); // 정상: toUpperCase는 string 타입의 메서드

///////////////////////////////////////////////////////////////////

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

///////////////////////////////////////////////////////////////////

// null
let null1: null = null;

///////////////////////////////////////////////////////////////////

// undefined
let unde1: undefined = undefined;

///////////////////////////////////////////////////////////////////

// let numA: number = null;
// null을 number 타입에 할당할 수 없었지만
// tsconfig.json에서 strictNullChecks가 false 설정시 오류가 발생하지 않음

///////////////////////////////////////////////////////////////////

// 리터럴 타입
// 리터럴 -> 특정 값으로 고정된 타입

let numA: 10 = 10;
// 타입으로 정의된 값 외에는 다른 값 지정 불가
// numA = 12;

let strA: "hello" = "hello";

let boolA: true = true;
