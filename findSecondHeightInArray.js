function secendHeightNumber(arry){
    let first=-Infinity;
    let secend =-Infinity;

    for(let num of arry){

        if(num>first){
            secend=first;
            first=num;
        }
        else if(num> secend && num !== first ){
            secend=num;
        }
    }
    return secend == -Infinity? null: secend;
    
}

console.log(secendHeightNumber([10,20,4,45,99]));

function heightNumber(arr){

    let first= -Infinity;

    for(num of arr){

        if(num>first){
            first=num;
        }
    }
    return first;
}

console.log(heightNumber([10,20,4,45,99]));


