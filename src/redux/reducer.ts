import * as actionTypes from './actionTypes';
import { SHAPE_TYPES, COLOR_TYPES } from '../constants';
import allItems from '../json/shapes.json';
import { IState, IAction } from '../interfaces';

const initalStates = {
  selectedColors: [],
  selectedShapes: [],
  filterItems: [...allItems],
  title: '',
};

const getTitle = (shapes: string[], colors: string[]) => {
  const shapeAllCount = SHAPE_TYPES.length;
  const colorAllCount = COLOR_TYPES.length;
  const selectedColorCount = colors.length > 0 ? colors.length : colorAllCount;
  const selectedShapeCount = shapes.length > 0 ? shapes.length : shapeAllCount;

  if (
    selectedShapeCount === shapeAllCount &&
    selectedColorCount === colorAllCount
  ) {
    return 'all';
  }
  if (selectedShapeCount === shapeAllCount && selectedColorCount === 1) {
    return `all ${colors[0]}`;
  }
  if (selectedColorCount === colorAllCount && selectedShapeCount === 1) {
    return `all ${shapes[0]}`;
  }
  if (selectedColorCount >= 2 && selectedShapeCount >= 2) {
    return 'multiple';
  }
  if (selectedShapeCount >= 2 && selectedColorCount === 1) {
    return `multiple ${colors[0]}`;
  }
  if (selectedColorCount >= 2 && selectedShapeCount === 1) {
    return `multiple ${shapes[0]}`;
  }
  if (selectedColorCount === 1 && selectedShapeCount === 1) {
    return `${shapes[0]} ${colors[0]}`;
  }
  return '';
};

const getFilteredItems = (shapes: string[], colors: string[]) => {
  const selectedColorCount = colors.length;
  const selectedShapeCount = shapes.length;

  const filteredItems = allItems.filter(
    item =>
      (selectedShapeCount === 0 || shapes.includes(item.shape)) &&
      (selectedColorCount === 0 || colors.includes(item.color)),
  );
  return filteredItems;
};

const reducer = (state: IState = initalStates, action: IAction) => {
  const { selectedColors, selectedShapes } = state;
  const { payload, type } = action;

  switch (type) {
    case actionTypes.TOGGLE_COLOR:
      const updatedSelectedColors = selectedColors.includes(payload)
        ? selectedColors.filter(item => item !== payload)
        : [...selectedColors, payload];
      return {
        ...state,
        title: getTitle(selectedShapes, updatedSelectedColors),
        filterItems: getFilteredItems(selectedShapes, updatedSelectedColors),
        selectedColors: updatedSelectedColors,
      };

    case actionTypes.TOGGLE_SHAPE:
      const updatedSelectedShapes = selectedShapes.includes(payload)
        ? selectedShapes.filter(item => item !== payload)
        : [...selectedShapes, payload];
      return {
        ...state,
        title: getTitle(updatedSelectedShapes, selectedColors),
        filterItems: getFilteredItems(updatedSelectedShapes, selectedColors),
        selectedShapes: updatedSelectedShapes,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
