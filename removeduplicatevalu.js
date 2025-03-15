
function removeDuplicates(arr){
    let uniquearr=[];

    for(let items of arr){
        if(!uniquearr.includes(items)){
            uniquearr.push(items);
        }
    }
    return uniquearr;
}
console.log(removeDuplicates([5,8,9,2,6,8]));


