import * as actionTypes from './actionTypes';

export const toggleColor = (color: string) => ({
  type: actionTypes.TOGGLE_COLOR,
  payload: color,
});

export const toggleShape = (shape: string) => ({
  type: actionTypes.TOGGLE_SHAPE,
  payload: shape,
});
