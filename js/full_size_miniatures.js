import {isEscapeKey} from './util';
import {isEnterKey} from './util';

const userModalElement = document.querySelector('.picture');
const userModalOpenElement = document.querySelector('.big-picture');
const userModalCloseElement = document.querySelector('.big-picture__cancel');

// const openUserModal =  () => {
//   userModalElement.classList.remove('hidden');

//   document.addEventListener('keydown', (evt) => {
//     if (isEscapeKey(evt)) {
//       evt.preventDefault();
//       userModalElement.classList.add('hidden');
//     }
//   });
// };

// const closeUserModal = () => {
//   userModalElement.classList.add('hidden');

//   document.removeEventListener('keydown', (evt) => {
//     if (isEscapeKey(evt)) {
//       evt.preventDefault();
//       userModalElement.classList.add('hidden');
//     }
//   });
// };

userModalOpenElement.addEventListener('click', () => {
  userModalElement.classList.remove('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    userModalElement.classList.add('hidden');
  }
});

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.add('hidden');
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    userModalElement.classList.remove('hidden');
  }
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    userModalElement.classList.add('hidden');
  }
});

export {};

// const rendersMiniatures = (miniatures) => {
//   const miniaturesContainer = document.querySelector ('.pictures');
//   const miniatureTemplate = document.querySelector('#picture')
//     .content.querySelector('.picture');

//   const fragment = document.createDocumentFragment();

//   miniatures.forEach(({url, likes, comments, description}) => {
//     const pictureElement = miniatureTemplate.cloneNode(true);
//     pictureElement.querySelector('.big-picture__img').src = url;
//     pictureElement.querySelector('.likes-count').textContent = likes;
//     pictureElement.querySelector('.comments-count').textContent = comments.length;
//     // pictureElement.querySelector('.social__comments'). = ;
//     pictureElement.querySelector('.social__caption').alt = description;
//     fragment.appendChild(pictureElement);
//   });

//   miniaturesContainer.appendChild(fragment);
// };
