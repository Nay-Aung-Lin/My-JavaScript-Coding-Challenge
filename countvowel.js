// count vowel

let input = prompt("Please Fill out this!");
 
function countVowel(v){ 
    let newStr = v.toLowerCase();
   
    let times = 0;

    // loop for string (for of)
    for(let i of newStr){
      if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
        times++;
      }
    }
    console.log(times + " vowel include");

}

countVowel(input);