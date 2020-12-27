import React from 'react'
import MultiCheck from './MultiCheck'
import SelectAll from './SelectAll';
import CheckboxList from './CheckboxList'
import { shallow, mount } from 'enzyme'

const setup = () => {

  const props = {
    // label: 'my-multi-check', 
    options: [
      { label: 'aaa', value: '111', },
      { label: 'bbb', value: '222', },
      { label: 'ccc', value: '333', },
      { label: 'ddd', value: '444', }
    ],
    values: [
      '333',
      '555'
    ],
    // columns: 2,
    onChange: jest.fn()
  }

  // Create Component
  const wrapper = shallow(<MultiCheck {...props} />);

  return {
    props,
    wrapper
  }
}

describe('MultiCheck', () => {
  describe('initialize', () => {
    const { wrapper, props } = setup();

    test('should render SelectAll and CheckboxList', () => {
      expect(wrapper.find(SelectAll).exists()).toBeTruthy();
      expect(wrapper.find(CheckboxList).exists()).toBeTruthy();
    })

    test('renders the label if label provided', () => {
      wrapper.setProps({ label: 'label' });
      expect(wrapper.find('.multi-check-label').text()).toEqual('label');
    });

    test('render multiple columns if columns provided', () => {
      wrapper.setProps({ columns: 2 });
      const columnCount = wrapper.find('ul').get(0).props.style.columnCount;

      expect(columnCount).toEqual(2);

    });

    test('render selected options if values provided', () => {
      const options_in_checked = props.options.map(option => ({
        ...option,
        checked: props.values.includes(option.value) ? true : false
      }))

      expect(wrapper.find(CheckboxList).props()).toHaveProperty('options', options_in_checked);

    });

    test('when SelectAll change, state should be updated', () => {
      const options_in_checked = props.options.map(option => ({
        ...option,
        checked: true
      }));
      const options_in_unchecked = props.options.map(option => ({
        ...option,
        checked: false
      }));

      const $SelectAll = wrapper.find(SelectAll);

      $SelectAll.props().onChange(options_in_checked);
      expect(props.onChange).toHaveBeenCalled();
      expect(wrapper.find(CheckboxList).props()).toHaveProperty('options', options_in_checked);

      $SelectAll.props().onChange(options_in_unchecked);
      expect(props.onChange).toHaveBeenCalled();
      expect(wrapper.find(CheckboxList).props()).toHaveProperty('options', options_in_unchecked);
    })


    test('when CheckboxList change, state should be updated', () => {
      const updated_options = [{ ...props.options[0], checked: true }];
      const $CheckboxList = wrapper.find(CheckboxList);

      $CheckboxList.props().onChange(updated_options);
      expect(props.onChange).toHaveBeenCalled();
      expect(wrapper.find(SelectAll).props()).toHaveProperty('options', updated_options);


    })

  });
});
