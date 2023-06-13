// Объявление функции для проверки длины строки:
const exercise = 'Второе задание по JS';
const checkLengthString = function (string, length) {
  if (string.length <= length) {
    return true;
  }
};

// Вызов функции для проверки длины строки:

checkLengthString(exercise, 30);

// Объявление функции для проверки, является ли строка палиндромом:

const checkPalindromeString = (palindrome) => {
  if (palindrome) {
    return true;
  }
};

// Вызов функции для проверки, является ли строка палиндромом:

checkPalindromeString('доход');
