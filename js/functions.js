// Объявление функции для проверки длины строки:

// const checkLengthString = function (string, length) {
//   if (string.length <= length) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Сокращенный вариант
const checkLengthString = (string, length) => string.length <= length;

// Вызов функции для проверки длины строки:

// console.log(checkLengthString('Второе задание по JS', 19));
// console.log(checkLengthString('Второе задание по JS', 20));
// console.log(checkLengthString('Второе задание по JS', 21));

checkLengthString('Второе задание по JS', 20);

// Объявление функции для проверки, является ли строка палиндромом:

const checkPalindrome = function (palindrome) {
  return palindrome.replaceAll(' ', '').toLowerCase() === palindrome.replaceAll(' ', '').toLowerCase().split('').reverse().join('');
};

// Вызов функции для проверки, является ли строка палиндромом:

// console.log(checkPalindrome('топот'));
// console.log(checkPalindrome('ДовОд'));
// console.log(checkPalindrome('Кекс'));
// console.log(checkPalindrome('Лёша на полке клопа нашёл '));

checkPalindrome('ДовОд');
