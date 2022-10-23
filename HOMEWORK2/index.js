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

// // Task 7

// const realDate = new Date;

// let hours = realDate.getHours();


// if(hours == 23 && hours <=5){
//     alert("Good night");
// } else if (hours > 5 && hours <= 11){
//     alert("Good morning");
// } else if (hours > 11 && hours <= 17){
//     alert("Good afternoon");
// } else if (hours > 17 && hours < 23){
//     alert("Good evening");
// }

// switch (hours) {
//     case 23:
//     case 0:        
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         alert("Good night");
//         break;
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         alert("Good morning");
//         break;
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//         alert("Good afternoon");
//         break;
//     case 17:
//     case 18:
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//         alert("Good evening");
//         break;
// }

// // END
