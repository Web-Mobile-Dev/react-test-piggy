import styled from 'styled-components';

import { STATIC_COLORS } from './constants';

export interface IProps {
  shape: string;
  color: string;
}

export const ItemBox = styled.div`
  margin: 15px;
  padding-top: calc(100% - 30px);
  border: 2px solid ${STATIC_COLORS.borderColor};
  border-radius: 4px;
  position: relative;
`;

export const ShapeBox = styled.div`
  width: ${(props: IProps) =>
    props.shape === 'square' || props.shape === 'round' ? '60%' : '70%'};
  height: ${props =>
    props.shape === 'square' || props.shape === 'round' ? '60%' : '50%'};
  background: ${props => props.color};
  border: none;
  border-radius: ${props =>
    props.shape === 'round' || props.shape === 'oval' ? '50%' : '0%'};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const TriangleBox = styled.div`
  width: 60%;
  height: 60%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  &:after {
    height: 100%;
    width: 100%;
    position: relative;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    content: '';
    display: block;
    position: absolute;
    background-size: cover;
    background: ${props => props.color};
    top: 70%;
  }
`;

export const Header = styled.div`
  background: ${STATIC_COLORS.headerBackground};
  color: white;
  height: 75px;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  padding-bottom: 5px;
  font-size: 2rem;
  font-weight: bold;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 2rem 0px 2rem;
`;

export const SelectionRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    max-width: 800px;
  }
`;

export const Title = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  font-size: 3rem;
  font-style: italic;
  font-weight: bold;
  color: ${STATIC_COLORS.titleColor};
  text-transform: uppercase;
`;
export const FilteredItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
