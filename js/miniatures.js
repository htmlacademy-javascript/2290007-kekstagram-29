import {createPicture} from './data.js';

const picturesContainer = document.querySelector ('.pictures  container');

const pictureTemplate = document.querySelector('#picture').content;

const similarPictures = createPicture();

const similarContainerFragment = document.createDocumentFragment();

similarPictures.forEach(({url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').likes = likes;
  pictureElement.querySelector('.picture__comments').comments = comments;
  similarContainerFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(similarContainerFragment);
