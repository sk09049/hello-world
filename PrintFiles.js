const pathOne = "";
const pathTwo = "";
const type = process.argv[2] | "";
const fs = require('fs');


loadCondent = async () => {

const firstCondent = fs.readdirSync(pathOne);
 
const secondCondent = fs.readdirSync(pathTwo);

firstCondent.forEach(a=> console.log(a));
secondCondent.forEach(a=> console.log(a));

const matchedCondent = [];
const uniqueInFirst = [];
const uniqueInSecond = [];

for(let x of firstCondent){
let isMatch = false;
for(let y of secondCondent){
if(x===y) {matchedCondent.push(x);
isMatch = true;
break;
}
}
if(!isMatch) uniqueInFirst.push(x);
}

for(let x of secondCondent){
let isMatch = false;
for(let y of firstCondent){
if(x===y) {
isMatch = true;
break;
}
}
if(!isMatch) uniqueInSecond.push(x);
}

//Need to implement better logging
console.log(matchedCondent);
console.log(uniqueInFirst);
console.log(uniqueInSecond);

}

  loadCondent();



