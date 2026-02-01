//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function multiply_divide(number){
    if(number%2 === 0){
        const multiply = number * 2;
        return multiply;
    }else{
        const divide = number / 2;
        return divide; 
    }
}

const resultEven = multiply_divide(34);
console.log('even:',resultEven);

const resultOdd = multiply_divide(13);
console.log('odd:',resultOdd);