const scores = [10 , 20 , 30 , 40 ,50 ,60];
// Return the number of scores greater than 30
const result = scores.reduce((accumulator , current)=>{
    if(current > 30){
        accumulator ++;
    }
    return accumulator;
},0); // 0 is initial value of the accumulator
console.log(result);