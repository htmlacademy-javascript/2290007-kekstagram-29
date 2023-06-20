const identifiers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// for (let i = 0; i < identifiers.length; i++) {
//   identifiers[i];
// }

const avatars = [
  1,
  2,
  3,
  4,
  5,
  6
];

const descriptions = ['кекс', 'пора домой', 'очень вкусно', 'свободно пархает', 'прохладненько', 'поехали'];

const likes = {
  min: 15,
  max: 200
};

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Юрий',
  'Ксения',
  'Константин',
  'Татьяна',
  'Александр',
  'Алена',
  'Алексей',
  'Елизавета',
  'Андрей',
  'Валентина'
];

// Функция для поиска случайного индекса элемента из массива:

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция по поиску случайного элемента в переданном массиве:
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Функция для описания фотографии, опубликованной пользователем:

const describePhotoPostedByUser = () => ({
  id: getRandomArrayElement(identifiers),
  avatar: `img/avatar-${ getRandomArrayElement(avatars) }.svg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomArrayElement(likes),
  message: getRandomArrayElement(messages),
  name: getRandomArrayElement(names)
});

// Установление длинны массива:
// const similarPhotoPostedByUser = Array.from({length: 25}, describePhotoPostedByUser);
// console.log(similarPhotoPostedByUser);

// console.log(describePhotoPostedByUser());
describePhotoPostedByUser();
