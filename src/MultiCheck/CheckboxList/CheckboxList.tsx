import React, { memo } from 'react';
import Checkbox from '../../Checkbox';
import { Option } from '..';
import { useEffectCallback } from '../../hooks'


/**
 * 
 * @param {Option[]} options - options 
 * @param {Function} onChange - when option is changed, 
 *                              it should be passed to outside
 */
export type Props = {
  options: Option[],
  onChange: (options: Option[]) => void
}

const CheckboxList: React.FunctionComponent<Props> = (props): JSX.Element => {

  const { options, onChange } = props;

  /**
   * Callback function from Checkbox Component 
   * Update the selected options
   * 
   * @param {Option} option - target option
   * @param {boolean} checked - is checked
   * 
   */
  const onOptionChange = (option: Option, checked: boolean): void => {

    onChange(options.map((item: Option) => ({
      ...item,
      checked: item.value === option.value ? checked : item.checked
    })));

  }

  return <>
    {
      options.map((option: Option) => {

        return <li key={option.value}>
          <Checkbox
            label={option.label}
            value={option.value}
            checked={!!option.checked}
            onChange={useEffectCallback((checked: boolean) => {
              onOptionChange(option, checked);
            }, [option.checked])}
          />
        </li>
      })
    }
  </>
}
export default memo(CheckboxList)