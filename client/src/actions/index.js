import history from '../history';
import streams from '../api/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  POST_STREAM,
  PUT_STREAM,
  DELETE_STREAM,
  GET_STREAM,
  GET_STREAMS
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const getStreams = () => async dispatch => {
  const response = await streams.get('./streams');

  dispatch({
    type: GET_STREAMS,
    payload: response.data
  });
};

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('./streams', { ...formValues, userId });

  dispatch({
    type: POST_STREAM,
    payload: response.data
  });
  //redirect user
  history.push('/');
};

export const getStream = id => async dispatch => {
  const response = await streams.get(`./streams/${id}`);

  dispatch({
    type: GET_STREAM,
    payload: response.data
  });
};

export const updateStream = (id, formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.put(`./streams/${id}`, {
    ...formValues,
    userId
  });

  dispatch({
    type: PUT_STREAM,
    payload: response.data
  });

  //redirect user
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`./streams/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id
  });

  //redirect user
  history.push('/');
};
