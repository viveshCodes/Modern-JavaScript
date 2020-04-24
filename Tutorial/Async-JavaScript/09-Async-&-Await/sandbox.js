const getTodos = async () =>{
  const response = await fetch('todos/viv.json');
  const data =  await response.json();
  return data;
};
getTodos()
  .then(data => console.log('promise resolved :' , data));