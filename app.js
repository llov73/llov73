let a = 5;
// let은 let을 쓰지 않고 값을 업데이트할 수 있다. 15 - 16줄 참조
const b = 2;
// constant 변하지 않는 값(상수) 업데이트 할 수 없음.

let myName = "luna";
// JS 에서는 스페이스를 대문자로 대신 한다. camelCase
// string 값은 "", ''로 감싸야 한다.

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Luna";
console.log("my name is " + myName);

/* boolean */
const amIFat = true;
console.log(amIFat); // true

const nullNull = null;
console.log(nullNull); // null은 '없음'의 값이 채워짐. 값이 없다는 것을 알려줌.

let something;
console.log(something); // undefined 정의되지 않음. 공간만 존재.
// 모두 데이터 타입

/* array */

/*    
    const mon = "mon";
    const tue = "tue";
    const wed = "wed";
    const thu = "thu";
    const fri = "fri";
    const sat = "sat";
    const sun = "sun"; 

    비효율적인 방식의 예시
*/

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// array 배열되어 list로 나타난다.

console.log(daysOfWeek[2]);
// 0부터 센다.

// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek); // sun이 추가 된다.

/* objects */
// array는 의미를 붙여주지 않는 이상 알 수 없지만 object는 의미를 알 수 있다.
const playerPoints = 25;
const playerBeauti = true;
const playerFat = "little bit";

const player = {
    name: "Luna", 
    points: 25,
    beauti: true,
};
console.log(player);
console.log(player.name);
// console은 object

console.log(player);
player.beauti = false;
console.log(player);
// 위는 true, 아래는 false const 안의 값을 변경하는 것은 오류가 아님.

player.lastName = "Kim";
console.log(player);
// property는 언제든 추가할 수 있다.

