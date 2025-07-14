// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// let a: void;
// a = 1;
// a = "hello";
// a = {};
// a = undefined;
// a = null; // stricNull 체크가 활성화된 경우 null 할당 불가

// 현재(23년 7월 24일) 최신 버전인 5.1.0 버전에서는 이것이 업데이트되어
// 다음과 같이 아무것도 반환하지 않는 함수의 반환값 타입을 undefined으로 정의해도
// 문제가 발생하지 않도록 수정되었습니다.
function func3(): undefined {
  console.log("hello");
}

function func4(): null {
  console.log("hello"); // 이것만 하면 오류남
  return null; // null을 반환해야 오류가 발생하지 않음
}

////////////////////////////////////////////////////////

// never
// never -> 존재하지 않는
// 불가능한 타입

function fun5(): never {
  while (true) {}
}

// 프로그램 실행시 에러 발생할 때도 never 타입을 사용
function fun6(): never {
  throw new Error();
}

let anyVar: any;

// never 타입은 어떤 값도 할당할 수 없는 타입
let a: never;

// a = 1;
// a = "hello";
// a = {};
// a = undefined;
// a = null; //strictNull 체크가 false여도 never 타입에는 null 할당 불가
// a = anyVar; // any타입도 할당불가능
