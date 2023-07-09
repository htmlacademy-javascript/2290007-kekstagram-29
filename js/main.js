import {getPictures} from './data.js';
import {renderCollection} from './collection_miniatures.js';
import './full_size_miniatures.js';

const pictures = getPictures();

renderCollection(pictures);
