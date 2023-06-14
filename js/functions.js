// Объявление функции для проверки длины строки:

const checkLengthString = function (string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
};

// Вызов функции для проверки длины строки:

checkLengthString('Второе задание по JS', 20);

// Объявление функции для проверки, является ли строка палиндромом:

const checkStringPalindrome = function (palindrome) {
  return palindrome.toLowerCase() === palindrome.toLowerCase().split('').reverse().join('');
};

// Вызов функции для проверки, является ли строка палиндромом:

checkStringPalindrome('доход');
