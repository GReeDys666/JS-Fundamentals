// // Task 1

// function upperCase(str) {
//     regexp = /^[A-Z]/;
//     if (regexp.test(str)) {
//         console.log("String's starts with uppercase character");
//     } else {
//         console.log("String's not starts with uppercase character");
//     }
// }

// upperCase('regexp');
// upperCase('RegExp');

// // END

// // Task 2

// function checkEmail(str) {
//     regex = /(\S+)@(\S+)\.(\S+)/;
//     console.log(regex.test(str));
// }


// checkEmail("Qmail2@gmail.com");

// // END


// // Task 3

// let str = "cdbBdbsbz";
// let regexp = /d(b+)(d)/gi;
// let result = regexp.exec(str);
// console.log(result);


// // END

// // Task 4

// const text = 'Java Script';
// const regex = /(\w+)\s(\w+)/;

// const result = text.replace(regex, '$2, $1');

// console.log(result);

// // END

// // // Task 5

// input.oninput = function () {
//   let cardCode = this.value.replace(/\D/g, '').substring(0,16)
//   if(cardCode){
//       cardCode = cardCode.match(/.{1,4}/g).join(' ');
//   } 
//   this.value = cardCode
// }

// // END

// // Task 6


// function checkEmail(str) {
//   let regex = /^[^#_-]([A-Za-z0-9_.%+]\-?)+@[A-Z0-9-]+\.[A-Z]{2,4}/ig;

//   if (regex.test(str)) {
//     console.log("Email is correct!");
//   } else {
//     console.log("Email is not correct!");
//   }
// }

// checkEmail('my_mail@gmail.com');

// checkEmail('#my_mail@gmail.com');

// checkEmail('my_ma--il@gmail.com');

// // END


// // Task 7
// not yet
// // \d\.\d|\d+
// // ^[^0-9]([A-Za-z0-9]+)|([A-Za-z]\d\.\d)
// function checkLogin(str) {
  
//   let regex = /([0-9]\.[0-9])|\d/g;
//   let regex1 = /^([A-Za-z]\S\d\.\d)$/g;

//   console.log(str.match(regex));

//   console.log(regex1.test(str));

// }


// checkLogin('ee1.1ret3');
// checkLogin('ee1*1ret3');

// END