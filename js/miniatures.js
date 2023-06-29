import {getPictures} from './data.js';

const picturesContainer = document.querySelector ('.pictures');

const pictureTemplate = document.querySelector('#picture').content;

const similarPictures = getPictures();

const similarContainerFragment = document.createDocumentFragment();

similarPictures.forEach(({url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  similarContainerFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(similarContainerFragment);
