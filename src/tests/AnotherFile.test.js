import React from 'react';
import { shallow, mount, render } from 'enzyme';

import AnotherFile from './../js/AnotherFile';
import { sum } from './../js/AnotherFile';

describe('<AnotherFile />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<AnotherFile test={"test in test"}/>);
    // console.log(wrapper.debug())
    expect(wrapper.text()).toEqual('test in test');
  });

  xit('renders an `.icon-star`', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
  });

  xit('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
