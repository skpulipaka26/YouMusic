// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import youtube from './youtube';
import autocomplete from './autocomplete';
import extractor from './youtube-extractor';
import player from './player';

export default function createRootReducer(history: History) {
  return combineReducers({
    youtube,
    autocomplete,
    extractor,
    player,
    router: connectRouter(history),
  });
}
