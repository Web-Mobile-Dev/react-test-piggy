import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { COLOR_TYPES } from '../../constants';
import { toggleColor } from '../../redux/actions';
import { IState } from '../../interfaces';
import { ColorItem, ColorFilterContainer } from './styles';

const ColorFilter = (): JSX.Element => {
  const dispatch = useDispatch();
  const { selectedColors } = useSelector((state: IState) => state);

  return (
    <ColorFilterContainer>
      {COLOR_TYPES.map((color, index) => (
        <ColorItem
          key={index}
          color={color}
          selected={selectedColors.includes(color)}
          onClick={() => dispatch(toggleColor(color))}
        />
      ))}
    </ColorFilterContainer>
  );
};

export default ColorFilter;
