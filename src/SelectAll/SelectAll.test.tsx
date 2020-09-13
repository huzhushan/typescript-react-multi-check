import React from 'react'
import SelectAll from './SelectAll'
import CheckboxItem from '../CheckboxItem'
import { shallow, mount } from 'enzyme'

describe('SelectAll', () => {
  const options = [
    { label: 'aaa', value: '111', },
    { label: 'bbb', value: '222', },
    { label: 'ccc', value: '333', },
    { label: 'ddd', value: '444', }
  ];
  const props = {
    options,
    onChange: jest.fn()
  };

  let wrapper: any;
  let $CheckboxItem: any;

  beforeEach(() => {
    wrapper = shallow(<SelectAll {...props} />);
    $CheckboxItem = wrapper.find(CheckboxItem)
  });


  test('should render CheckboxItem', () => {
    expect($CheckboxItem.exists()).toBeTruthy();
  })

  test('when CheckboxItem change, run onChange function', () => {
    $CheckboxItem.props().onChange(1);
    expect(props.onChange).toHaveBeenCalled();
  })

  
  test('if all other options are checked, it should be checked', () => {
    const _props = {
      ...props,
      options: options.map(option => ({
        ...option,
        checked: 1
      }))
    }
    wrapper = shallow(<SelectAll {..._props} />);
    $CheckboxItem = wrapper.find(CheckboxItem)

    expect($CheckboxItem.props()).toHaveProperty('checked', 1)
  })


  test('if any other option are unchecked, it should be unchecked', () => {
    const rndIndex = Math.floor(Math.random() * options.length);
    const _props = {
      ...props,
      options: options.map((option, index) => ({
        ...option,
        checked: index === rndIndex ? 0 : 1
      }))
    }
    
    wrapper = shallow(<SelectAll {..._props} />);
    $CheckboxItem = wrapper.find(CheckboxItem)
    
    expect($CheckboxItem.props()).not.toHaveProperty('checked', 1)
  })


});
