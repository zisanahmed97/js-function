function evenNumbersOnly(numbers){
         let evens = [];
    for(const number of numbers){
   
        if(number%2 === 0){
           
            evens.push(number);

        }
    }
    return evens;
}



const numbers = [12,45,67,88,90];
const evens = evenNumbersOnly(numbers);
console.log('even numbers are:',evens)
