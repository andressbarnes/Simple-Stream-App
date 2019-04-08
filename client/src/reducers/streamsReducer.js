import _ from 'lodash';

import {
  POST_STREAM,
  GET_STREAM,
  GET_STREAMS,
  PUT_STREAM,
  DELETE_STREAM
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case GET_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case PUT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      //_omit creates new object automatically
      return _.omit(state, action.payload);
    case GET_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};
