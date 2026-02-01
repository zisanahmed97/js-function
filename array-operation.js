function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

const numbs = [23,45,89,10];
const total = sumOfNumbers(numbs);
console.log(total);