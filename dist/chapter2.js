// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "yamyam"];
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// 길이과 타입이 고정된 배열
let tup1 = [1, 2];
// tup1 = [1, 2, 3]; // 오류 발생: 튜플 타입의 길이를 넘어서 할당할 수 없음
// tup1 = ["1", "2"]; // 오류 발생: 타입이 일치하지 않음
let tup2 = [1, "2", true];
export {};
// tup2 = ["2", 1, true]; // 오류 발생 : 순서가 맞지 않음
// tup2 = [1]; // 오류 발생: 튜플의 길이가 맞지 않음
