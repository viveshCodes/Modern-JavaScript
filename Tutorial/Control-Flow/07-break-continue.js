let numbers = [1,2,3,4 ,5,6, 7,8]
for(let i = 0 ; i<numbers.length ; i++){
    if(numbers[i]===3){
        continue
    }else if (numbers[i]===7){
        break
    }else{
        console.log(numbers[i])
    }
}