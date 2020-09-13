import React from 'react'
import CheckboxItem from './CheckboxItem'
import { shallow, mount } from 'enzyme'

const setup = () => {
  
  const props = {
    
    label: "Apple",
    value: 'apple',
    checked: 0,
    onChange: jest.fn()
  }

  // Create Component
  const wrapper = shallow(<CheckboxItem {...props} />);

  return {
    props,
    wrapper
  }
}

describe('CheckboxItem', () => {
  const { wrapper, props } = setup();
  

  test('should render checkbox input', () => {
    expect(wrapper.find('input').exists()).toBeTruthy();
  })

  test('if props.checked is 0, it should be unchecked', () => {
    wrapper.setProps({checked: 0});
    expect(wrapper.find('input').props()).toHaveProperty('checked', false);
  })

  
  test('if props.checked is 1, it should be checked', () => {
    wrapper.setProps({checked: 1});
    expect(wrapper.find('input').props()).toHaveProperty('checked', true);
  })

  test('if props.checked is 2, it should be half-checked', () => {
    wrapper.setProps({checked: 2});
    expect(wrapper.find('input').props()).toHaveProperty('checked', false);
    expect(wrapper.find('.checkbox').hasClass('half-checked')).toBeTruthy();
  })

  test('when input change, run onChange function', () => {
    wrapper.find('input').simulate('change', {
      target: {checked: true}
    });
    expect(props.onChange).toHaveBeenCalled();
  })


});
