import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SHAPE_TYPES } from '../../constants';
import { toggleShape } from '../../redux/actions';
import { IState } from '../../interfaces';
import { ShapeItem, ShapeFilterContainer } from './styles';

const ShapeFilter = (): JSX.Element => {
  const dispatch = useDispatch();
  const { selectedShapes } = useSelector((state: IState) => state);

  return (
    <ShapeFilterContainer id="shapeSelect">
      {SHAPE_TYPES.map((shape, index) => (
        <ShapeItem
          key={index}
          selected={selectedShapes.includes(shape)}
          onClick={() => dispatch(toggleShape(shape))}
        >
          {shape}
        </ShapeItem>
      ))}
    </ShapeFilterContainer>
  );
};

export default ShapeFilter;
