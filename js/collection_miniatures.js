import {rendersArrayPictures} from './miniatures.js';
import {showBigPicture} from './full_size_miniatures';

const container = document.querySelector('.pictures');

// Делегирование:
const renderCollection = (pictures) => {
  container.addEventListener('click', (evt) => {
    const miniature = evt.target.closest('[data-picture-id]');
    if(!miniature) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +miniature.dataset.pictureId
    );
    showBigPicture(picture);
  });

  rendersArrayPictures(pictures);
};

export {renderCollection};
