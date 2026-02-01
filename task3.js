//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(values){
 let sum=0;
    for(const value of values){
           sum = sum+value;

    }
    const avg = sum/values.length;
    return avg;

}

const result=make_avg([23,45,87,90]);
console.log(result);