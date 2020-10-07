import React from 'react';
import { mount } from 'enzyme';
import App from '../src/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './redux/reducer';
import { IState } from './interfaces';
import allItems from './json/shapes.json';

function shallowSetup() {
  // Sample props to pass to our shallow render
  const initialState: IState = {
    selectedColors: [],
    selectedShapes: [],
    filterItems: [...allItems],
    title: '',
  };
  // wrapper instance around rendered output
  const store = createStore(reducer, initialState);
  const enzymeWrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  return {
    enzymeWrapper,
  };
}

describe('Shallow rendered App', () => {
  it('should render all items correctly', () => {
    const { enzymeWrapper } = shallowSetup();

    expect(enzymeWrapper.find('#title').text()).toBe('all items:');
    expect(enzymeWrapper.find('#filterItem').children().length).toBe(30);
    // find round div
    const shapeSelections = enzymeWrapper.find('#shapeSelect');
    const roundDiv = shapeSelections.childAt(0);
    roundDiv.simulate('click');
    expect(enzymeWrapper.find('#filterItem').children().length).toBe(24);
  });
});
