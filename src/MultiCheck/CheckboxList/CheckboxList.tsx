import React, {memo} from 'react';
import Checkbox from '../../Checkbox';
import {Option, CallbackType} from '..';
import {useEffectCallback} from '../../hooks'


/**
 * 
 * @param {Option[]} options - options 
 * @param {Function} onChange - when option is changed, 
 *                              it should be passed to outside
 */
export type Props = {
  options: Option[],
  onChange: (options: CallbackType) => void
}

const CheckboxList: React.FunctionComponent<Props> = (props): JSX.Element => {

  const {options, onChange} = props;

  /**
   * Callback function from Checkbox Component 
   * Update the selected options
   * 
   * @param {Option} option - target option
   * @param {number} checked - is checked
   * 
   */ 
  const onOptionChange = (option: Option, checked: number): void => {
    const _options = [...options];
    const _index = _options.findIndex((item: Option) => item.value === option.value);
    
    _options.splice(_index, 1, {
      ...option,
      checked
    });
    
    onChange(_options);
    
  }

  return <>
    { 
      options.map((option: Option) => {
        
        return <li key={option.value}>
          <Checkbox 
            label={option.label} 
            value={option.value} 
            checked={+!!option.checked} 
            onChange={useEffectCallback((checked: number) => {
              onOptionChange(option, checked);
            }, [option.checked])} 
          />
        </li>
      })
    }
  </>
}
export default memo(CheckboxList)