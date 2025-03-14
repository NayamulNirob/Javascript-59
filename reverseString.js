// For ReverseString

function ReverseString(str){
    let reversed="";
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
}
console.log(reverseString("Hello World"));
                                                                                                                  

function reverseString(str){
   return str.split("").reverse().join("");
}
console.log(reverseString("ABCDEFGHIJKLMONP"));


