// [1] 

// (1)var, function은 Hoisting이 발생한다. (Implicit global(암시적) <-> Explicit(명시적))

// number = 33; // variable
// console.log(number);
// var number;


// function Declaration <=> Object Def.
// hello();
// function hello(){
//     console.log("Welcone to JavaScript Course!!");


// [2] ES6 => let(variable), const(constant), class는 Hoisting이 일어나지 않는다. 
// let number;
// number = 33; // variable
// console.log(number);

// ES6 => Strict Mode => 'use stric'


//[2] Data Type

// (1) Primitive Type
/*
 (1) number
 (2) string
 (3) boolean
 (4) null
 (5) undefined  <->  NaN(Not a Number)
 (6) symbol
*/

// (2) Object Type
// => Built-In Object
/*
    (1) Array
    (2) Date
    (3) Math
    (4) Object
*/

// {아주 중요} Object Notation {Key(property) : value}
// JSON : {"name" : "SMU", "age" : 33}
const person = {
    name: 'SMU',
    age: 24,
    pet: {
        name: '짜망',
        age: 8
    },
    sayHello: function(){
        console.log("환영합니다.. Object Definition!!");
    }
};

//typeof Operator
console.log(typeof 33);
console.log(typeof person);
console.log(typeof true);
console.log(typeof 'SMU'); // JS에서 primitive type임
console.log(typeof hello);

// (3) JavaScript 거짓 같은 value
/*
BIgInt는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인
2^53 -1 보다 큰 정수를 표현할 수 있는 내장 객체이다.
*/
/*
    (1) false : 거짓
    (2) 0 : 숫자 0
    (3) -0 : 음수 0
    (4) 0n : BigInt
    (5) "" : empty string
    (6) null : 아무런 값도 없다.
    (7) undefined : 바인딩 되지 않는 값(할당되지 않는 빈 value)
    (8) NaN : 숫자가 아님(Number가 아님)
*/


// [3] Array => Object(특수한 Object)
// {1} Array를 생성하는 방법

// (1) Array Literal Syntax
// const fruits = ['apple', 'banana', 'strawberry'];

// (2) Array Constructor Syntax
// const fruits =  new Array('apple', 'banana', 'strawberry');


// {2} Array에 접근하는 방법
const fruits = ['apple', 'banana', 'strawberry'];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// {3} Array API (property, method)
// (1) array 길이 : length
console.log(fruits.length); // fruits 배열의 길이

// => array의 마지막 항목을 가져오기
console.log(fruits[fruits.length - 1]);

// => array의 마지막 항목을 추가 : push()
fruits.push('graph');
console.log(fruits.length);

// => forEach : array의 item들을 순회하면서 출력
fruits.forEach(function(item, index, array){
    console.log(item, index);
})

// => array 끝에 항목을 제거 : pop()
fruits.pop();
console.log(fruits); // arr 형태로 출력


// [4] Control Statement => 각자 공부할 것 재공지
/*
    (1) Conditional Statement (if, switch)
    (2) Loop Statement (for, while, do ~ while)
    (3) 분기문 (break, continue)
    (4) A
*/
