// // Task 1

// let firstSide = +prompt("Enter the first side: ");
// let secondSide = +prompt("Enter the second side: ");

// function calcRectangleArea(width, height){
//     let area;

//     try {
//         if(isNaN(width) || isNaN(height)){
//             throw new Error("Enter the correct number!");
//         }
//         area = width * height;
//         alert(`area of the rectangle is ${area}`);
//     } catch (error) {
//         alert(error.message);
//     }

// }

// calcRectangleArea(firstSide, secondSide);

// // END

// Task 2

// let userAge = +prompt("Enter your age: ", "");


// function checkAge(value) {

//     try {
//         if (value == "") {
//             throw new Error("The field is empty! Please enter your age");
//         }
//         if (isNaN(value)) {
//             throw new TypeError("value is not a number");
//         }
//         if (value < 14){
//             throw new RangeError("You`re too young for this!");
//         }
//         alert("Welcome to our site");
//     } catch (error) {
//         console.log(error.name);
//         alert(error.message);
//     }

// }

// checkAge(userAge);

// // END

// // Task 3
// let date = +prompt("Enter the number of the month");

// class MonthException {
//     constructor(message) {
//         this.name = "MonthException";
//         this.message = message;
//     }
// };

// const showMonthName = (monthIndex) =>{
//     const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     try {
//         if(monthIndex < 1 || monthIndex > 12){
//             throw new MonthException("Incorrect month number");
//         }
//         return monthsArray[monthIndex - 1];
//     } catch (error) {
//         console.log(error.name);
//         console.log(error.message);
//     }
// }

// const monthName = showMonthName(date);
// console.log(monthName);

// //END

// Task 4

function showUsers(ids) {
    function showUser(id) {
        if (id < 0) {
            throw new Error('ID can`t be negative');
        }
        return { id: id };
    }

    let userIds = [];
    for (let i = 0; i < ids.length; i++) {
        try {
            userIds.push(showUser(ids[i]));
        } catch (error) {
            console.log(`${error.name}: ${error.message}: ${ids[i]}`);
        }
    }
    console.log(userIds);
}

showUsers([8, -12, 44, 22]);

// END