import React from 'react';
import {shallow} from 'enzyme';

import App from './App';

test('renders app component heading', () => {
  const componentWrapper = shallow(<App />);
  const title = componentWrapper.find('h4'); 
  expect(title.text()).toEqual('React16 typescript with jest and enzyme');
});
