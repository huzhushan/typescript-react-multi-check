import React, {memo, useCallback} from 'react';
import Checkbox from '../../Checkbox';
import {Option, CallbackType} from '..';

/**
 * @param {Option[]} options - all options
 * @param {void} onChange - callback function 
 */
export type Props = {
  options: Option[],
  onChange: (checked: CallbackType) => void
}

const SelectAll: React.FunctionComponent<Props> = (props): JSX.Element => {
  const {options, onChange} = props;

  const getChecked = () => {
    const selectedLength = options.filter((option: Option) => option.checked === 1).length;
    const optionsLength = options.length;

    if (selectedLength <= 0) {
      return 0; // Represents unchecked
    } else if (selectedLength > 0 && selectedLength < optionsLength) {
      return 2; // Represents half-checked
    } else {
      return 1; // Represents checked
    }
  };


  return <li>
    <Checkbox 
      label="Select All" 
      value="" 
      checked={getChecked()} 
      onChange={useCallback((checked: number) => {
        onChange(checked)
      }, [])} 
    />
  </li>
}
export default memo(SelectAll)