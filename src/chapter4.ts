// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "얌",
  nickname: "yammy",
  birth: "2021-06-29",
  bio: "얌이는 천사고양이에요",
  location: "파주",
};

let user2: User = {
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

// 타입 별칭을 사용할 때 주의할 점
// 1. 타입 별칭은 중복 선언이 불가능합니다. ex) Type User ={}

// 인덱스 시그니처
type CountryCodes = {
  [Key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [Key: string]: number;
  Korea: number; // 필수 프로퍼티
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
};

// 인덱스 시그니처 사용시 주의할 점

// type CountryNumberCodes = {
//   [Key: string]: number;
//   Korea: string; // 필수 프로퍼티
// };

// let countryNumberAndStringCodes: CountryNumberCodes = {
//   Korea: "ko", // 타입이 맞지 않아 오류 발생
// };
