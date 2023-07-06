// Функция по поиску случайного элемента:
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция по поиску случайного элемента в переданном массиве:
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Функция по созданию генератора идентификаторов:
const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, getRandomArrayElement, createIdGenerator, isEscapeKey};
