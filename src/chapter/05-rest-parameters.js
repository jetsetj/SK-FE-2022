/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

/* 나머지 매개변수 (집합) -------------------------------------------------------- */

// ES5
// var multiplyCount = function () {
//   var first = arguments[0]; // 첫번째 매개변수
//   var rest = [].slice.call(arguments, 1); // 나머지 매개변수

//   for (var i = 0, l = rest.length; i < l; ++i) {
//     if (i === 0) first += rest[i];
//     else first *= rest[i];
//   }

//   return first;
// };

/* -------------------------------------------------------------------------- */

// ES6
const multiplyCount = (first, ...rest) => {
  return rest.reduce((result, currentValue, index) => {
    return index === 0 ? (result += currentValue) : (result *= currentValue);
  }, first);
};

let result = multiplyCount(100, 20, -10, -101, 99);

console.log(result);