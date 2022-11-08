// // Task 1

// let mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" 
// };

// function propsCount(currentObject){
//     let keys = Object.keys(currentObject);
//     return keys.length;
// }

// console.log(propsCount(mentor));

// // END


// // Task 2

// let currentObject = {
//     firstName: "Petro",
//     lastName: "Petrenko",
//     age: 32,
//     married: true,
//     editor: "VS Code"
// }

// function showProps(obj){
//     let keys = Object.keys(obj);
//     console.log(keys);
//     let values = Object.values(obj);
//     console.log(values);
// }

// console.log(showProps(currentObject));

// // END


// // Task 3

// class Person {
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName(){
//         return `${this.name} ${this.surname}`;
//     }
// }

// class Student extends Person {
//     constructor(name, surname, year){
//         super(name,surname);
//         this.year = year;
//     }
//     showFullName(midleName){
//          return `${super.showFullName()} ${midleName}`;
//     }
//     showCourse(){
//         let currentYear = 2020;
//         return currentYear - this.year;
//     }
// }

// let student = new Student("Petro", "Petrenko", 2015);
// console.log(student.showFullName("Petrovych")); 
// console.log("Current course: " + student.showCourse()); 

// // END


// // Task 4

// class Worker {
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }
//     #experience = 1.2;

//     showSalary() {
//         return this.dayRate * this.workingDays;
//     }

//     get showExp() {
//         return this.#experience;
//     }

//     get setExp() {
//         return this.#experience;
//     }

//     set setExp(value) {
//         this.#experience = value;
//     }

//     showSalaryWithExperience() {
//         return this.showSalary() * this.setExp;
//     }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalary());
// console.log("New experience: " + worker1.showExp);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());


// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// console.log(worker2.fullName + ' salary: ' + worker2.showSalary());
// console.log("New experience: " + worker2.showExp);
// console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// console.log(worker3.fullName + ' salary: ' + worker3.showSalary());
// console.log("New experience: " + worker3.showExp);
// console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());

// console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());
// console.log(worker2.fullName + ' salary: ' + worker2.showSalaryWithExperience());
// console.log(worker3.fullName + ' salary: ' + worker3.showSalaryWithExperience());

// let workersArray = [worker1, worker2, worker3];
// workersArray.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

// function arrayAfterSort(employee){
//     console.log("***********************");
//     console.log("Sorted array:");
//     for (let i = 0; i < workersArray.length; i++) {
//         console.log(`${employee[i].fullName} salary ${employee[i].showSalaryWithExperience()}`)
//     }
    
// }

// arrayAfterSort(workersArray);


// Task 5

class GeometricFigure {
    getArea(){
        return 0;
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    getArea() {
        return 0.5*this.base*this.height;
    }
}

class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return Math.pow(this.side, 2);
    }
}

class Circle extends GeometricFigure {
    constructor (radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI* Math.pow(this.radius, 2);
    }
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(figures);

function handleFigures(figures) {
    let array = [];
    for (let i of figures) {
        if (i instanceof GeometricFigure) {
            console.log('Geometric figure: ' + i.toString() + ' area - ' + i.getArea());
        }
        array.push(i.getArea());
    }
    let sumOfFigure = array.reduce(function(sum, figure) {
        return sum + figure;
    }, 0);
    console.log(sumOfFigure);
}

handleFigures(figures);