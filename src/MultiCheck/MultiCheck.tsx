import React, { useState } from 'react';
import styles from './MultiCheck.scss';
import SelectAll from './SelectAll';
import CheckboxList from './CheckboxList'

/**
 * @param {string} label - Option label
 * @param {string} value - Option value
 * @param {boolean} checked - Option status 
 */
export type Option = {
  label: string,
  value: string,
  checked?: boolean
}

/**
 * Notice:
 * 1. There should be a special `Select All` option with checkbox to control all passing options
 * 2. If columns > 1, the options should be placed from top to bottom in each column
 *
 * @param {string} label - the label text of this component
 * @param {Option[]} options - options
 * @param {string[]} values - default checked option values
 * @param {number} columns - default value is 1
 * @param {Function} onChange - when checked options are changed,
 *                             they should be passed to outside
 */
type Props = {
  label?: string,
  options: Option[],
  columns?: number,
  values?: string[]
  onChange?: (options: Option[]) => void,
}

const MultiCheck: React.FunctionComponent<Props> = (props): JSX.Element => {
  const { label = "MultiCheck", options, values, columns, onChange } = props;

  // Add checked attr for options
  const [checkboxOptions, setCheckboxOptions] = useState<Option[]>(
    options.map((option: Option) => ({
      ...option,
      checked: values ? values.includes(option.value) : false
    }))
  );


  /**
   * Callback function When selectedOptions updated or toggle SelectAll
   *  
   * @param {Option[]} options
   */
  const onUpdateOptions = (options: Option[]): void => {

    setCheckboxOptions(options);
    // Pass selectedOptions to outside
    onChange && onChange(options.filter((item: Option) => !!item.checked));
  }

  const componentProps = {
    options: checkboxOptions,
    onChange: onUpdateOptions
  }


  return <div className={styles['multi-check']}>
    <div className={styles['multi-check-label']}>{label}</div>
    <ul
      className={`${styles['multi-check-options']}`}
      style={{
        MozColumnCount: columns,
        WebkitColumnCount: columns,
        columnCount: columns
      }}
    >
      <SelectAll {...componentProps} />
      <CheckboxList {...componentProps} />
    </ul>
  </div>
}

export default MultiCheck;
