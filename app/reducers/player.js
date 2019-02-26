import {
  ADD_SONG_TO_PLAYLIST,
  SET_PLAYLIST,
  SET_CURRENT_PLAYING,
  UPDATE_CURRENT_PLAYING,
  REMOVE_SONG_FROM_PLAYLIST
} from '../actions/player';

const initialState = {
  currentPlaying: {
    videoId: null,
    seek: 0,
    player: null,
    timer: null,
    playing: false
  },
  playlist: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: action.payload
      };
    case ADD_SONG_TO_PLAYLIST:
      return {
        ...state,
        playlist: [...state.playlist, action.payload]
      };
    case REMOVE_SONG_FROM_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.filter(song => song.videoId !== action.payload)
      };
    case SET_CURRENT_PLAYING:
      return {
        ...state,
        currentPlaying: action.payload
      };
    case UPDATE_CURRENT_PLAYING: {
      return {
        ...state,
        currentPlaying: {
          ...state.currentPlaying,
          ...action.payload
        }
      };
    }
    default:
      return state;
  }
};
