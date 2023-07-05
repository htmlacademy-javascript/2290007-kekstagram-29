import {isEscapeKey} from './util';

const picture = document.querySelector('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

// const commentElement = document.querySelector('.social__comment');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  picture.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModal () {
  picture.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPicture.addEventListener('click', () => {
  openUserModal();
});

bigPictureCancel.addEventListener('click', () => {
  closeUserModal();
});

// const rendersComments = (arrayComments) => {
//   arrayComments.forEach(({avatar, commentatorName, message}) => {
//     const comment = commentElement.cloneNode(true);
//     comment.querySelector('.social__picture').src = avatar;
//     comment.querySelector('.social__picture').alt = commentatorName;
//     comment.querySelector('.ssocial__text').textContent = message;
//     return comment;
//   });
// };

// const rendersBigPictures = (arrayBigPictures) => {
//   arrayBigPictures.forEach(({}) => {

//   })
//   rendersComments();
// };

export {};
