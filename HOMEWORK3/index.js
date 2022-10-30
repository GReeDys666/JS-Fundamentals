// // Task 1

// let array = [2,3,4,5];
// let sum = 1;
// for (let i = 0; i < array.length; i++) {
//     sum *= array[i];
// }

// console.log(sum);
// let i = 0;
// let summary = 1;
// while (i < array.length) {
//     summary *= array[i];
//     i++
// }

// console.log(summary);

// // END

// // Task 2

// for (let i = 0; i < 15; i++) {
//     alert(i % 2 !== 0 ? i +' is odd' : i +' is even');
// }

// // END

// // Task 3
// let arr = [];

// function randArray(k) {
//     let arr = [];
//     for (let i = 0; i < k; i++) {
//         arr.push(Math.floor(Math.random() * 500));
//     }
//     console.log(arr);
// }

// randArray(5);

// //END

// // Task 4

// function raiseToDegree(a, b) {
//     if(Number.isInteger(Math.pow(a, b))){
//         console.log(Math.pow(a, b));
//     } else{
//         alert("Enter a whole number!");
//     }
// }
// let firstNumber = +prompt("Enter the number: ");
// let secondNumber = +prompt("Enter the degree: ");

// raiseToDegree(firstNumber, secondNumber);


// // END

// // Task 5

// function findMin() {
//     let min = arguments[0];
// 	for (i in arguments){
// 		if (arguments[i] < min) min = arguments[i];
// 	}
//     console.log(min);
// }


// findMin(12, 14, -7, -4, 0.2); 

// // END

// // Task 6

// function findUnique(arr) {
//     console.log(new Set(arr).size < arr.length ? false : true);
// }


// findUnique([1, 2, 3, 5, 3]);  
// findUnique([1, 2, 3, 5, 11]); 

// //END

// // Task 7

// function lastElem(array, range) {
//     if (range == undefined) {
//         console.log(array.slice(-1));
//     } else {
//         console.log(array.slice(array.length - range));
//     }
// }


// lastElem([3, 4, 10, -5]);
// lastElem(([3, 4, 10, -5]), 2);
// lastElem([3, 4, 10, -5], 8);

// // END


// // Task 8
// function UpperFirstLetter(str) {

//     const arr = str.split(" ");

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

//     }
//     const str2 = arr.join(" ");
//     console.log(str2);
// }

// UpperFirstLetter("i love java script");

// // END