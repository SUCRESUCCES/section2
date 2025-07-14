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
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    Korea: 410,
};
export {};
// 인덱스 시그니처 사용시 주의할 점
// type CountryNumberCodes = {
//   [Key: string]: number;
//   Korea: string; // 필수 프로퍼티
// };
// let countryNumberAndStringCodes: CountryNumberCodes = {
//   Korea: "ko", // 타입이 맞지 않아 오류 발생
// };
