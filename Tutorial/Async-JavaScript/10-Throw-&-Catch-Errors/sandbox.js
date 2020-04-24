const getTodos = async () =>{
  const response = await fetch('todos/viv.json');
  if(response.status !== 200) {
    throw new Error('Could Not Fetch Data (:');
  }
  const data =  await response.json();
  return data;
};
getTodos()
  .then(data => console.log('promise resolved :' , data));