const rendersArrayPictures = (ArrayPictures) => {
  const picturesContainer = document.querySelector ('.pictures');

  const pictureTemplate = document.querySelector('#picture').content
    .querySelector('.picture');

  const picturesContainerFragment = document.createDocumentFragment();

  ArrayPictures.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    picturesContainerFragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(picturesContainerFragment);
};

export {rendersArrayPictures};
