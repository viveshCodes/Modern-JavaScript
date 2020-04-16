const paras = document.querySelectorAll('p');
paras.forEach(para => {
    if(para.textContent.includes('error')){
        para.classList.add('error');
    }
    if(para.textContent.includes('success')){
        para.classList.add('success');
    }
})

// NOTE : .innerText doesn't show hidden text but .textContent


// HOW TO TOGGLE CLASS :
const title = document.querySelector('.title');
title.classList.toggle('text');