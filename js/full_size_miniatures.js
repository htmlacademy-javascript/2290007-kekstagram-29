const miniature = document.querySelector('.picture');
const bigMiniature = document.querySelector('.big-picture');

const rendersMiniatures = (miniatures) => {
  const miniaturesContainer = document.querySelector ('.pictures');
  const miniatureTemplate = document.querySelector('#picture')
    .content.querySelector('.picture');

  const fragment = document.createDocumentFragment();

  miniatures.forEach(({url, likes, comments, description}) => {
    const pictureElement = miniatureTemplate.cloneNode(true);
    pictureElement.querySelector('.big-picture__img').src = url;
    pictureElement.querySelector('.likes-count').textContent = likes;
    pictureElement.querySelector('.comments-count').textContent = comments.length;
    // pictureElement.querySelector('.social__comments'). = ;
    pictureElement.querySelector('.social__caption').alt = description;
    fragment.appendChild(pictureElement);
  });

  miniaturesContainer.appendChild(fragment);
};

miniature.addEventListener('click', () => {
  bigMiniature.classList.remove('hidden');
  rendersMiniatures();
});

export {};


