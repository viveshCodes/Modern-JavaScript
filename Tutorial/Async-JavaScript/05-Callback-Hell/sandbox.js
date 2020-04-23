
const getTodos = (resource , callback) =>{
    // Let's make a request object using XMLHttpRequest
    const request = new XMLHttpRequest();

    // Track the state change 
    request.addEventListener('readystatechange',() =>{
        if(request.readyState === 4 && request.status === 200){
          const data = JSON.parse(request.responseText);
            // console.log(request , request.responseText);
            callback(undefined , data);
        } else if(request.readyState === 4){
            // console.log('Could Not Fetch The Data');
            callback('could not fetch data' , undefined);
        }
    });
    //.open('typeOfRequest' , 'endPoint');

    // Request setup
    request.open('GET' , resource);
    // Send the request
    request.send();
};


getTodos( 'todos/viv.json'  , (err , data)=>{
    if(err){
      console.log(err);
    } else{
      console.log(data);
    }
    getTodos( 'todos/vivbhai.json'  , (err , data)=>{
      if(err){
        console.log(err);
      } else{
        console.log(data);
      }

      getTodos( 'todos/vivesh.json'  , (err , data)=>{
        if(err){
          console.log(err);
        } else{
          console.log(data);
        }
     
     });
  
  });

});


// NOTE : JSON is the data format that most of the API returns.