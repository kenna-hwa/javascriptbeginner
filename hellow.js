"use strict"


var list = [];
for(var Num=1; Num<=1000000; Num++){
    list.push(Num);
};

var start = Date.now();
console.log(start);
debugger;

var check = function(){
};
list.forEach(check);

debugger;

var end = Date.now()
console.log(end);

debugger;

console.log(end-start);