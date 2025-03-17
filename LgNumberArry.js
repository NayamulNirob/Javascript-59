
function largeNumber (arr){

    return Math.max(...arr);
}
console.log(largeNumber([2,5,9,8,6,8,69,58,56]));


function revarseString(str){

   var reversed="";

   for(let i=str.length-1;i>=0;i--){
    reversed+=str[i];
   }
   return reversed;
}

console.log(revarseString("Hello"));
console.log("Hey".split('').reverse().join(''));


function removeDuplicate(arr){
    return [...new Set(arr)];
}

console.log(removeDuplicate([5,5,6,6,9,3,3,6,2,4]));


function palindrome(str){
    return str===str.split('').reverse().join('');
}

console.log(palindrome("madam"));
console.log(palindrome("hello"));


function isPrime(num){
    return num%2===0?"Even":"Odd";
}

console.log(isPrime(6));
console.log(isPrime(5));

function sumAllArray(arr){
    return arr.reduce((sum,num)=>sum+num,0);
}
console.log(sumAllArray([2,3,4,5]));