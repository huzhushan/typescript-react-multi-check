import React from 'react';
import CheckboxItem from '../CheckboxItem';
import {Option} from '../MultiCheck';


/**
 * 
 * @param {Option[]} options - options 
 * @param {Option[]} selectedOptions - selected options
 * @param {Function} onChange - when option is changed, 
 *                              it should be passed to outside
 */
export type Props = {
  options: Option[],
  selectedOptions?: Option[],
  onChange: (options: Option[]) => void
}

const CheckboxList: React.FunctionComponent<Props> = (props): JSX.Element => {

  const {options, selectedOptions, onChange} = props;

  /**
   * Callback function from CheckboxItem Component 
   * 
   * @param {Option} option - target option
   * @param {boolean} checked - is checked
   * 
   */ 
  const onOptionChange = (option: Option, checked: boolean): void => {
    
    
  }

  return <>
    { 
      options.map((option: Option) => {
        const checked = Number(!!selectedOptions!.find((item: Option) => item.value === option.value));

        return <li key={option.value}>
          <CheckboxItem label={option.label} value={option.value} checked={checked} onChange={onOptionChange.bind(null, option)} />
        </li>
      })
    }
  </>
}
export default CheckboxList