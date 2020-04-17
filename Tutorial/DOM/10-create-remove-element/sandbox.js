const submitButton = document.querySelector('button');
submitButton.addEventListener('click' , () =>{
    console.log('You clicked submit button');
});
const items = document.querySelectorAll('li');
items.forEach( ( item ) => {
    item.addEventListener('click' , (event) => {
        console.log("You clicked an item.")
        console.log(event.target); 
        event.target.style.textDecoration = 'line-through';
    });
});
