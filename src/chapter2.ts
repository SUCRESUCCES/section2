// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "yamyam"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이과 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; // 오류 발생: 튜플 타입의 길이를 넘어서 할당할 수 없음
// tup1 = ["1", "2"]; // 오류 발생: 타입이 일치하지 않음

let tup2: [number, string, boolean] = [1, "2", true];
// tup2 = ["2", 1, true]; // 오류 발생 : 순서가 맞지 않음
// tup2 = [1]; // 오류 발생: 튜플의 길이가 맞지 않음

// js에서 배열로 반환됨(tsc로 컴파일 시)
tup1.push(1); // 정상: push는 배열 메서드이므로 사용 가능
// 배열 메서드를 사용할 때 튜플의 길이 제한 발동X
// push()로 길이가 늘어났는데도 오류발생하지 않음

// tup1.pop(); // 정상: pop도 배열 메서드이므로 사용 가능
// tup1.pop();
// tup1.pop();

// 튜플을 사용할 수 있는 경우
const users: [string, number][] = [
  ["쪼얌", 1],
  ["쪼밍", 2],
  ["수밍", 3],
  ["해쭈", 4],
  // [5, "숨냐"],
  // 튜플을 사용하면 인덱스의 위치에 따라 값들이 이미 정해져있음
  // 따라서 튜플 타입을 사용하면 값을 잘못 넣는 것을 방지할 수 있음
];
