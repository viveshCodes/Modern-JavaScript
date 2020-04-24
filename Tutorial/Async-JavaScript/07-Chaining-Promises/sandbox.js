const getTodos = (resource) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
  
      if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4){
        reject('could not fetch the data');
      }
  
    });
    
    request.open('GET', resource);
    request.send();
  });

};

getTodos('todos/vivesh.json').then(data => {          // Promise 1
  console.log('promise 1 resolved:', data);
  return getTodos('todos/vivbhai.json');
}).then(data =>{                                     // Promise 2
  console.log('promise 2 resolved :' , data);
  return getTodos('todos/viv.json');
}).then(data =>{                                     // Promise 3
  console.log('promise 3 resolved:', data);
}).catch(err => {
  console.log('promise rejected:', err);
});

// promise example
const getSomething = () => {

  return new Promise((resolve, reject) => {
    // do something (fetch data)
    // resolve('some data');
    reject('some error');
  });

};

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }, err => {
//   console.log('promise rejected:', err);
// });

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }).catch(err => {
//   console.log('promise rejected:', err);
// });