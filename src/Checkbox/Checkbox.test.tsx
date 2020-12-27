import React from 'react'
import Checkbox from './Checkbox'
import { shallow, mount } from 'enzyme'

const setup = () => {

  const props = {

    label: "Apple",
    value: 'apple',
    checked: false,
    onChange: jest.fn()
  }

  // Create Component
  const wrapper = shallow(<Checkbox {...props} />);

  return {
    props,
    wrapper
  }
}

describe('Checkbox', () => {
  const { wrapper, props } = setup();


  test('should render checkbox input', () => {
    expect(wrapper.find('input').exists()).toBeTruthy();
  })

  test('if props.checked is false, it should be unchecked', () => {
    wrapper.setProps({ checked: false });
    expect(wrapper.find('input').props()).toHaveProperty('checked', false);
  })


  test('if props.checked is true, it should be checked', () => {
    wrapper.setProps({ checked: true });
    expect(wrapper.find('input').props()).toHaveProperty('checked', true);
  })

  test('if props.halfChecked is true, it should be half-checked', () => {
    wrapper.setProps({ checked: false, halfChecked: true });
    expect(wrapper.find('input').props()).toHaveProperty('checked', false);
    expect(wrapper.find('.checkbox').hasClass('half-checked')).toBeTruthy();
  })

  test('when input change, run onChange function', () => {
    wrapper.find('input').simulate('change', {
      target: { checked: true }
    });
    expect(props.onChange).toHaveBeenCalled();
  })


});
