const rendersArrayPictures = (arrayPictures) => {
  const picturesContainer = document.querySelector ('.pictures');

  const pictureTemplate = document.querySelector('#picture')
    .content.querySelector('.picture');

  const picturesContainerFragment = document.createDocumentFragment();

  arrayPictures.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    picturesContainerFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesContainerFragment);
};

export {rendersArrayPictures};


// Второй вариант:
// const picturesContainer = document.querySelector ('.pictures');
// const pictureTemplate = document.querySelector('#picture')
//   .content.querySelector('.picture');
// const createMiniature = ({url, description, likes, comments}) => {
//   const miniature = pictureTemplate.cloneNode(true);
//   miniature.querySelector('.picture__img').src = url;
//   miniature.querySelector('.picture__img').alt = description;
//   miniature.querySelector('.picture__likes').textContent = likes;
//   miniature.querySelector('.picture__comments').textContent = comments.length;
//   return miniature;
// };
// const rendersArrayMiniatures = (ArrayPictures) => {
//   const miniaturesContainerFragment = document.createDocumentFragment();
//   ArrayPictures.forEach((picture) => {
//     const miniature = createMiniature(picture);
//     miniaturesContainerFragment.appendChild(miniature);
//   });
//   picturesContainer.appendChild(miniaturesContainerFragment);
// };
// export {rendersArrayMiniatures};
