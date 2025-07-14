// object

import { read } from "fs";

// 객체 리터럴 타입
let user: {
  id?: number; // ?는 선택적 property(optional property)를 의미합니다
  name: string;
} = {
  id: 1,
  name: "얌",
};

// let user: object 이렇게 하면 안됨!

// 구조를 기준으로 타입을 정의(구조적 타입 시스템) -> Property type system
// 타입스크립트는 구조적 타입 시스템을 사용합니다.

// 이름을 기준으로 타입을 정의(명목적 타입 시스템) -> Nominal type system

// let cat: {
//   name: string;
//   color: string;
// } = {
//   name: "얌",
//   color: "orange",
// };

// user.id;

// user = {
//   name: "얌",
// };
// 위에서 id를 선택적 프로퍼티 사용함

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY", // readonly는 읽기 전용 프로퍼티를 의미합니다
};

// 절대 수정이 불가능한 프로퍼티는 readonly로 선언합니다

//config.apiKey = "hacked";
// 자바스크립트에서는 이런 식으로 프로퍼티의 값 변경이 가능했음
