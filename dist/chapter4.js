// 타입 별칭
let user = {
    id: 1,
    name: "얌",
    nickname: "yammy",
    birth: "2021-06-29",
    bio: "얌이는 천사고양이에요",
    location: "파주",
};
let user2 = {
    // {
    //   id: number;
    //   name: string;
    //   nickname: string;
    //   birth: string;
    //   bio: string;
    //   location: string;
    // } = {
    id: 1,
    name: "얌",
    nickname: "yammy",
    birth: "2021-06-29",
    bio: "얌이는 천사고양이에요",
    location: "파주",
};
export {};
// 타입 별칭을 사용할 때 주의할 점
// 1. 타입 별칭은 중복 선언이 불가능합니다. ex) Type User ={}
