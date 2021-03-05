/**
 * indexOf() 입니다.
 * indexOf(검색할 값, 시작 인덱스);
 */


var value = "123123";

//인덱스 반환
console.log(value.indexOf(3));

//여러 글자의 인덱스 반환
console.log(value.indexOf(23));

//반환할 인덱스가 없는 경우
console.log(value.indexOf(9));

//두 번째 파라미터부터 인덱스 반환
console.log(value.indexOf(2,3));

//두 번째 파라미터 값이 0보다 작을 때
console.log(value.indexOf(3,-1));

//두 번째 파라미터 값이 .length 보다 클 때
console.log(value.indexOf(3,9));

//두 번째 파라미터 값이 NaN일 때
console.log(value.indexOf(3,"A"));

/**
 * lastIndexOf() 입니다.
 * lastIndexOf(검색할 값, 시작 인덱스);
 */

//인덱스 반환
console.log(value.lastIndexOf(3));

//여러 글자의 인덱스 반환
console.log(value.lastIndexOf(23));

//반환할 인덱스가 없는 경우
console.log(value.lastIndexOf(9));

//두 번째 파라미터부터 인덱스 반환
console.log(value.lastIndexOf(1,3));

//두 번째 파라미터가 0보다 작을 때
console.log(value.lastIndexOf(3,-1));

//두 번째 파라미터 값이 .length보다 클 때
console.log(value.lastIndexOf(3,9));

//두 번째 파라미터 값이 NaN일 때
console.log(value.lastIndexOf(3,"A"));

//두 번째 파라미터부터 인덱스 반환 시 두 번째 파라미터가 검색할 값 보다 작거나 큰 경우

var test = "345789";

//indexOf()
console.log(test.indexOf(6,4));

//lastIndexOf()
console.log(test.lastIndexOf(5,3));