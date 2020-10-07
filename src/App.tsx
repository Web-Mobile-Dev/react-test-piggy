import React from 'react';
import { useSelector } from 'react-redux';
import {
  ItemBox,
  ShapeBox,
  TriangleBox,
  Header,
  BodyContainer,
  Title,
  FilteredItemsContainer,
  SelectionRow,
} from './styles';
import ShapeFilter from './components/ShapeFilter';
import ColorFilter from './components/ColorFilter';
import { IState, IItem } from './interfaces';

const App = () => {
  const { title, filterItems } = useSelector((state: IState) => state);

  return (
    <div>
      <Header data-testid="header">SHAPES</Header>
      <BodyContainer>
        <SelectionRow>
          <ShapeFilter />
          <ColorFilter />
        </SelectionRow>
        <Title data-testid="title">{`${title} items:`}</Title>
        <FilteredItemsContainer data-testid="filterItem">
          {filterItems.map((item: IItem, index: number) => (
            <ItemBox key={index}>
              {item.shape !== 'triangle' && (
                <ShapeBox color={item.color} shape={item.shape} />
              )}
              {item.shape === 'triangle' && <TriangleBox color={item.color} />}
            </ItemBox>
          ))}
        </FilteredItemsContainer>
      </BodyContainer>
    </div>
  );
};

export default App;
