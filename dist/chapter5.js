// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["USER"] = 11] = "USER";
    Role[Role["GUEST"] = 12] = "GUEST";
})(Role || (Role = {}));
// 숫자를 할당해도 됨 ex) ADMIN = 0, USER = 1, GUEST = 2
// 숫자 할당을 제거해도 자동으로 0부터 시작하는 숫자가 할당됨
// ex) ADMIN, USER, GUEST
// 숫자를 10부터 시작하면 ADMIN = 10, USER = 11, GUEST = 12
// => 숫자형 enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
// 문자형 enum
const user1 = {
    name: "얌",
    //   role: 0, // 0 <- 관리자
    role: Role.ADMIN,
    Language: Language.english,
};
const user2 = {
    name: "쪼밍",
    //   role: 1, // 1 <- 일반 유저
    role: Role.USER,
};
const user3 = {
    name: "수밍",
    //   role: 2, // 2 <- 게스트
    role: Role.GUEST,
};
console.log(user1, user2, user3);
export {};
// enum은 컴파일 결과 사라지지 않음
