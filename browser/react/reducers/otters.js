// Required libraries
import axios from 'axios';

// ----------- Actions
const FETCH_OTTERS = 'FETCH_OTTERS';

// ----------- Action Creators
export const receiveOtters = (otters) => {
  return {
    type: FETCH_OTTERS,
    otters
  };
};

// ----------- Reducer
const initialState = {
  allOtters: []
};

export default function reducer (prevState = initialState, action) {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case FETCH_OTTERS: {
      nextState.allOtters = action.otters;
      break;
    }
  }

  return nextState;
}

// ----------- Disptachers
export const fetchOtters = () => {
  return (dispatch) => {
    axios.get('api/otter/')
      .then(response => {
        dispatch(receiveOtters(response.data));
      })
      .catch(console.error);
  };
};
