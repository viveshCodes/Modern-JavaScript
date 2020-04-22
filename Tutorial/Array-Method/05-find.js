const scores = [10 , 20 , 30 , 40 , 50];
const firstHighScore = scores.find((score)=>{
    return score > 35;
});
console.log(firstHighScore);