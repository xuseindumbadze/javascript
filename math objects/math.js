// let a =Math.sqrt(127);
// let b=Math.round(a);
// console.log(b);

// let random = Math.random()*100;
// console.log(Math.round( Math.random()*100)+1);

// let a = Math.pow(53.23, 2);
// console.log(a);
// let b = Math.trunc(a);
// console.log(b);

// let BigNum = 98;
// let isBig = BigNum > 100;
// console.log(isBig);

// let b = "123abc"
// console.log(isFinite(b));

// let a = "hellow world"
// let b = a.search("world");
// console.log(b);

// let num = 7;
// let notBetween;
// if (num < 10 || num > 50) {
//   notBetween = true;
// } else {
//   notBetween = false;
// }
// console.log(notBetween);

// let gender = "female";
// if (gender == "female") {
//   console.log("მდედრობითი სქესი");
// } else if (gender == "male") {
//   console.log("მამრობითი სქესი");
// } else {
//   console.log("გაურკვეველი სქესი");
// }

// let animal = "სპილო";
// if (animal !== "სპილო") {
//   console.log("ეს ცხოველი სპილო არაა");
// } else {
//   console.log("ეს ცხოველი სპილოა");
// }

// let num1 = 99;
// let num2 = 19;
// if (num1 > num2) {
//   console.log("num1 მეტია num2_ზე");
// } else if (num1 < num2) {
//   console.log("num1 ნაკლებია num2_ ზე");
// } else {
//   console.log("num1 ტოლია num2_ის");
// }

// let month = 12;

// if ((month > 0 && month < 3) || month == 12) {
//   console.log('ზამთარია');
// } else if (month >= 3 && month <= 5) {
//   console.log('გაზაფხულია');
// } else if (month >= 6 && month <= 8) {
//   console.log('ზაფხულია');
// } else if (month >= 9 && month <= 11) {
//   console.log('შემოდგომაა');
// } else {
//   console.log('არცერთი თვე');
// }

// let season = "winter";

// switch (season) {
//   case "spring":
//     console.log("გაზაფხულია");
//     break;
//   case "summer":
//     console.log("ზაფხულია");
//     break;
//   case "autumn":
//     console.log("შემოდგომაა");
//     break;
//   case "winter":
//     console.log("ზამთარია");
//     break;
//   default:
//     console.log("წლის პერიოდი არაა განსაზღვრული");
// }

// ძველი

// let clock = 23;
// if (clock >= 0 && clock < 12) {
//   let dayPeriod = "AM - დღე–ღამის პირველი პერიოდია";
// } else {
//   let dayPeriod = "PM - დღე–ღამის მეორე პერიოდია";
// }
// console.log(dayPeriod);

// შესწორებული

// let clock = 23;
// let dayPeriod

// if (clock >= 0 && clock < 12) {
//    dayPeriod = "AM - დღე–ღამის პირველი პერიოდია";
// } else {
//    dayPeriod = "PM - დღე–ღამის მეორე პერიოდია";
// }
// console.log(dayPeriod);

// let clock = 23;
// let dayPeriod = (clock >= 0 && clock < 12)
// ? 'AM - დღე–ღამის პირველი პერიოდია' : 'PM - დღე–ღამის მეორე პერიოდია';
// console.log(dayPeriod);

// let string = "სრინგ"
// if (string.length > 100){
//     console.log('ტექსტის სიგრძე აჭარბებს დაშვებულ ნორმას')
// }else{
//     console.log( 'ტექსტის სიგრძე დაშვებული ნორმის ფარგლებშია')
// }

// let arr = [-7, 55.4, 33, 102];
// if (arr.length > 10) {
//   console.log(
//     "ეს მასივი ვერ დამუშავდება, მისი სიგრძე აჭარბებს დაშვებულ ნორმას");
// } else {
//   let sum = arr.reduce((acc, num) => acc + num, 0);
//   console.log("ელემენტების ჯამი:", sum);
// }
