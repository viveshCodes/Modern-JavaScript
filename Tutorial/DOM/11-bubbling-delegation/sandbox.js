const submitButton = document.querySelector('button');
const ulTag = document.querySelector('ul');
submitButton.addEventListener('click' , () =>{
    const li = document.createElement('li');
    li.textContent = 'Cheer for Mahi Bhai';
    ulTag.append(li);
    ulTag.prepend(li);
});
/*
stopPropagation
________________
*/
// const items = document.querySelectorAll('li');
// items.forEach( ( item ) => {
//     item.addEventListener('click' , (event) => {
//         event.target.style.textDecoration = 'line-through';
//         event.stopPropagation();
//         event.target.remove();
//     });
// });
ulTag.addEventListener('click' ,( event) => {
    if(event.target.tagName === 'LI'){
        event.target.remove();
    }
});