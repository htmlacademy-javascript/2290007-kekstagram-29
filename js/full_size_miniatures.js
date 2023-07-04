import {isEscapeKey, isEnterKey} from './util';
// import {rendersArrayPictures} from './miniatures';

const userModalElement = document.querySelector('.picture');
const userModalOpenElement = document.querySelector('.big-picture');
const userModalCloseElement = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModal () {
  userModalElement.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

userModalOpenElement.addEventListener('click', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

userModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
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
