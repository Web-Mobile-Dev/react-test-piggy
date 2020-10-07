import styled from 'styled-components';

import { STATIC_COLORS } from '../../constants';

export type Props = {
  selected: boolean;
  color: string;
};

export const ColorItem = styled.div<Props>`
  width: 2rem;
  height: 2rem;
  border-width: 2px;
  border-style: solid;
  border-color: ${props =>
    props.selected ? STATIC_COLORS.black : props.color};
  background: ${props => props.color};
  cursor: pointer;
  margin-right: 1.25rem;
`;

export const ColorFilterContainer = styled.div`
  display: flex;
`;
