const names = [
    'Vivesh',
    'viveshCodes',
    'Mahi Bhai',
    'viv-vhai',
    'Dhiraj',
    'Krushna'
];
// It's destructive method.
names.sort();
console.log(names);

const scores = [10 ,20 , 40 , 5 , 411];
scores.sort((a,b)=> b-a);     // Descending order : b-a , Ascending order a-b
console.log(scores);

// sorting object
const players = [
    {name :"Mahi Bhai" , score :183},
    {name :"MS Dhoni" , score : 204},
    {name : "MS", score:148}
];
players.sort((a , b) =>{
    if(a.score > b.score){
        return -1;   // It means a will come first in sorted array.
    }else if(b.score > a.score){
        return 1;   // It means b will come first in sorted array.
    }else {
        return 0;    // Means no change is needed.
    }
});
console.log(players);

/*
shorthand :
___________
players.sort((a , b) =>{
    return b.score-a.score;
});

*/