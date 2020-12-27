import React, { memo, useCallback } from 'react';
import Checkbox from '../../Checkbox';
import { Option } from '..';

/**
 * @param {Option[]} options - all options
 * @param {void} onChange - callback function 
 */
export type Props = {
  options: Option[],
  onChange: (checked: Option[]) => void
}

const SelectAll: React.FunctionComponent<Props> = (props): JSX.Element => {
  const { options, onChange } = props;
  const checked = options.every((option: Option) => !!option.checked);
  const halfChecked = !checked && options.some((option: Option) => !!option.checked);


  /**
   * Callback function from Checkbox Component 
   * Update the selected options
   * 
   * @param {boolean} checked - is checked
   * 
   */
  const onToggleSelectAll = (checked: boolean): void => {
    onChange(options.map((option: Option) => ({
      ...option,
      checked
    })))
  }


  return <li>
    <Checkbox
      label="Select All"
      value=""
      checked={checked}
      halfChecked={halfChecked}
      onChange={useCallback((checked: boolean) => {
        onToggleSelectAll(checked)
      }, [])}
    />
  </li>
}
export default memo(SelectAll)