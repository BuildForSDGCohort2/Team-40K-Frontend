import video from '../../images/intro.mp4';
import poster from '../../images/flag2.jpg';

const initialState = {
  showVideo: true,
  introVideo: video,
  introPoster: poster
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'show_video':
      return { ...state, showVideo: action.showVideo };
    case 'add_video':
      return { ...state, addVideo: action.addVideo };
    default:
      return state;
  }
};

// Actions
export const toggleVideo = (showVideo) => ({
  type: 'show_video', showVideo
});

export const addVideo = (addVideo) => ({
  type: 'add_video', addVideo
});
