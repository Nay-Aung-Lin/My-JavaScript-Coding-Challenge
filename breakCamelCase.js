// Break CamelCase

'use strict';
let string = prompt("Please fill out I can break Camel Case");
function solution(string) {
    let newString = "";
    for(let i of string){
        if(i == i.toUpperCase() ){
            newString += " ";
            newString += i;
        }else{
            newString += i;
        }
    }
    return newString;
}
alert(solution(string));