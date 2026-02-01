function doubleOrTriple(number, isDouble){
    if(isDouble === true){
        const double = number * 2;
        return double;
    }else{
       const result = number *3;
       return result;
    }
}

console.log(doubleOrTriple(5,true));
console.log(doubleOrTriple(5,false));

function numberOfElements(num){
    const len = num.length;
    return len;
}
console.log(numberOfElements([23,4,6,2,8,5]));

function name(str){
    console.log(str);
}

name('zisan');