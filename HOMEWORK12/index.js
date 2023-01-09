// Task 1

// (function changeButton() {
//     document.querySelector(".button").addEventListener("click", async function () {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json();
//     if (data){
//         let date = new Date();
//         document.querySelector(".button").textContent = `Your voice is accepted by ${date}`;
//     }
//     })
// })();

// END

// Task 2

let button = document.querySelector('.second_button');
let list = document.querySelector('.list');
button.addEventListener('click', async function() {
    const res = await fetch('http://127.0.0.1:5500/books.json');
    const data = await res.json();
        console.log(data);
    for (let value of Object.values(data[0])) {
        let item = document.createElement('li');
        item.textContent = value;
        list.append(item);
    }
})