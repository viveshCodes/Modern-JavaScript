
const getTodos = (callback) =>{
    // Let's make a request object using XMLHttpRequest
    const request = new XMLHttpRequest();

    // Track the state change 
    request.addEventListener('readystatechange',() =>{
        if(request.readyState === 4 && request.status === 200){
            // console.log(request , request.responseText);
            callback(undefined , request.responseText);
        } else if(request.readyState === 4){
            // console.log('Could Not Fetch The Data');
            callback('could not fetch data' , undefined);
        }
    });
    //.open('typeOfRequest' , 'endPoint');

    // Request setup
    request.open('GET' , 'https://jsonplaceholder.typicode.com/todos/');
    // Send the request
    request.send();
};

console.log(1);
console.log(2);
console.log(3);
getTodos((err , data)=>{
   console.log('Callback Fired');
   //console.log(err , data);
   if(err){
     console.log(err);
   } else{
     console.log(data);
   }

});
console.log(4);
console.log(5);
console.log(6);