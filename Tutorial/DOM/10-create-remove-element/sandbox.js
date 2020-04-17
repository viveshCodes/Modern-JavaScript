const submitButton = document.querySelector('button');
const ulTag = document.querySelector('ul');
submitButton.addEventListener('click' , () =>{
    const li = document.createElement('li');
    li.textContent = 'Cheer for Mahi Bhai';
    ulTag.append(li);
    ulTag.prepend(li);
});
const items = document.querySelectorAll('li');
items.forEach( ( item ) => {
    item.addEventListener('click' , (event) => {
        event.target.style.textDecoration = 'line-through';
        event.target.remove();
    });
});
