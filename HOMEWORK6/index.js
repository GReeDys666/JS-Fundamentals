// // Task 1

// document.getElementById("test").innerHTML = "Last";
// document.querySelector("#test").innerHTML = "1";

// // END

// // Task 2

// let image = document.querySelector(".image");
// image.src = "cat.jpg";
// alert(image.outerHTML);
// //  second method
// image.setAttribute("src", "cat.jpg");
// alert(image.outerHTML);

// // END

// // Task 3

// let div = document.querySelectorAll("#text p");

// for (let i = 0; i < div.length; i++) {
//     console.log(`Selector text ${i} ${div[i].innerText}`);

// }

// // END

// // Task 4

// (function getElements() {
//     alert(document.querySelector("#list :nth-child(1)").innerHTML);
//     alert(document.querySelector("#list :nth-child(5)").innerHTML);
//     alert(document.querySelector("#list :nth-child(2)").innerHTML);
//     alert(document.querySelector("#list :nth-child(4)").innerHTML);
//     alert(document.querySelector("#list :nth-child(3)").innerHTML);
// })();

// (function getlist() {
//     const ul = Array.from(document.querySelectorAll('#list>li'));
//     console.log(ul[0].textContent);
//     console.log(ul[4].textContent);
//     console.log(ul[1].textContent);
//     console.log(ul[3].textContent);
//     console.log(ul[2].textContent);
// })();

// // END

// // Task 5

// document.querySelector("h1").style.backgroundColor = "#94f594";

// const div = Array.from(document.querySelectorAll("#myDiv>p"));
// div[0].style.fontWeight = "bold";
// div[1].style.color = "red";
// div[2].style.textDecoration = "underline";
// div[3].style.fontStyle = "italic";

// document.getElementById("myList").style.display = "flex";
// document.getElementById("myList").style.listStyle = "none";
// document.querySelector("span").style.display = "none";

// // END


// // Task 6
// (function getUserData() {
//     let login = prompt("Enter your login:");
//     let password = prompt("Enter your password:");
//     document.querySelector("#input1").value = login;
//     document.querySelector("#input2").value = password;
// })();


// function swapValue() {
//     let firstInput = document.querySelector("#input1").value;
//     let secondInput = document.querySelector("#input2").value;

//     let temp = firstInput;
//     firstInput = secondInput;
//     secondInput = temp;

//     document.querySelector("#input1").value = firstInput;
//     document.querySelector("#input2").value = secondInput;
// };

// // END

// Task 7

const newMain = document.createElement("main");
const div = document.createElement("div");
const p = document.createElement("p");

newMain.className = "mainClass check item";
document.body.appendChild(newMain);
div.id = "myDiv";
document.querySelector("main").appendChild(div);
p.innerHTML = "First paragraph";
document.getElementById("myDiv").appendChild(p);

// END