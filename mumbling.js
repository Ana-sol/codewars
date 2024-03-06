//task

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

//solution 
const accum = str => str
  .split('')
  .map((ch, i) => (ch = ch.toLowerCase().repeat(i + 1)) && ch.charAt(0).toUpperCase() + ch.slice(1))
  .join('-');

console.log(accum("abcd"));    
console.log(accum("RqaEzty")); 
console.log(accum("cwAt")); 