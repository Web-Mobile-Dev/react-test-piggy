import styled from 'styled-components';
import { STATIC_COLORS } from '../../constants';

export type Props = {
  selected: boolean;
};

export const ShapeItem = styled.div<Props>`
  color: ${props =>
    props.selected
      ? STATIC_COLORS.fontColorLight
      : STATIC_COLORS.fontColorDark};
  font-style: italic;
  font-size: 1.25rem;
  text-transform: uppercase;
  margin-right: 1.25rem;
  font-weight: bold;
  cursor: pointer;
`;

export const ShapeFilterContainer = styled.div`
  display: flex;
  align-items: center;
`;
