// // Task 1

// let x = 1;
// let y = 2;

// let res1 = String(x) + y;
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = Boolean(x) + String(y);
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = x !== y;
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = x * "y";
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// // END

// // Task 2

// let userOpinion = prompt("Enter the number: ");

// let result = (userOpinion > 0 && userOpinion % 2 == 0 && userOpinion / 7) ? alert("Your number is correct!") :  alert("Enter the correct number :(");

// // END

// // Task 3

// let array = [2, "Me", true, null];

// alert(`Number of elements: ${array.length}`);

// let fifthElements = prompt("Enter the fifth element: ");
// array.push(fifthElements);

// alert(array[4]);

// array.splice(0, 1);
// alert(array);


// // END


// Task 4

// let cities = ["Rome", "Lviv", "Warsaw"]; 
// alert(cities.join("*"));

// // END

// // Task 5

// let isAdult = prompt("Are you of legal age? Y/N");

// if (isAdult == "Y") {
//     alert("You are too big");
// } else if(isAdult == "N") {
//     alert("You are too young");
// } else{
//     alert("Ayayayi");
// }

// // END

// // Task 6

// let firstSide = parseInt(prompt('Enter first side: '));
// let secondSide = parseInt(prompt('Enter second side: '));
// let thirdSide = parseInt(prompt('Enter third  side: '));


// const area = (firstSide + secondSide + thirdSide) / 2;

// const areaValue = Math.sqrt(area * (area - firstSide) * (area - secondSide) * (area - thirdSide));

// if (!firstSide || !secondSide || !thirdSide) {
//     alert("Incorrect data");
// } else {
//     console.log(`The area of the triangle is ${areaValue.toFixed(3)}`);
// }

// const sum = (Math.pow(firstSide, 2) + Math.pow(secondSide, 2)).toFixed(2);
// const side = Math.pow(thirdSide, 2).toFixed(2); //need function

// let showResult = (sum === side) ? console.log("Triangle is rectangular") : console.log("Triangle isn`t rectangular");

// // END