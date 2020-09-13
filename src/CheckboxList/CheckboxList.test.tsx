import React from 'react'
import CheckboxList from './CheckboxList'
import CheckboxItem from '../CheckboxItem'
import { shallow, mount } from 'enzyme'

describe('CheckboxList', () => {
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

  beforeEach(() => {
    wrapper = shallow(<CheckboxList {...props} />);
  });


  test('should render CheckboxItem', () => {
    expect(wrapper.find(CheckboxItem).length).toEqual(options.length);
  })

  test('if select all is checked, all other options are checked', () => {
    const _props = {
      ...props,
      options: options.map(option => ({
        ...option,
        checked: 1
      }))
    }
    wrapper = shallow(<CheckboxList {..._props} />);

    expect(wrapper.find('input[checked=false]').length).toEqual(0)
  })

  
  test('if select all is unchecked, all other options are unchecked', () => {
    
    expect(wrapper.find('input[checked=true]').length).toEqual(0)
  })


});
