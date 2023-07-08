import {getPictures} from './data.js';
import {rendersArrayPictures} from './miniatures.js';
import {renderCollection} from './collection_miniatures.js';
import './full_size_miniatures.js';

rendersArrayPictures(getPictures());
renderCollection();
