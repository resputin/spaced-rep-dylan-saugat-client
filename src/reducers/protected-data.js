import {
  FETCH_PROTECTED_DATA_SUCCESS,
  FETCH_PROTECTED_DATA_ERROR,
  VERIFY_ANSWER_SUCCESS,
  VERIFY_ANSWER_ERROR
} from '../actions/protected-data';

const initialState = {
  data: [],
  error: null,
  feedback: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data[0],
      error: null
    });
  } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  } else if (action.type === VERIFY_ANSWER_SUCCESS) {
    return Object.assign({}, state, {
      feedback: action.data
    });
  } else if (action.type === VERIFY_ANSWER_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
