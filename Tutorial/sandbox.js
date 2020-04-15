const ul = document.querySelector('.people');

const people = ['Mahi Bhai', 'MS Dhoni', 'Thala', 'Captain Cool', 'Finisher'];

let html = ``;

people.forEach(person => {
  // create html template for each person
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;