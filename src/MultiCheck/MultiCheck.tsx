import React, {useState} from 'react';
import styles from './MultiCheck.scss';
import SelectAll, {Props as SelectAllPropsType} from '../SelectAll';
import CheckboxList, {Props as CheckboxListPropsType} from '../CheckboxList'

/**
 * @param {string} label - Option label
 * @param {string} value - Option value
 * @param {number} checked - Option status (0: unchecked、1: checked)
 */
export type Option = {
  label: string,
  value: string,
  checked?: number
}

export type CallbackType = Option[] | number;

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
  const {label, options, values, columns, onChange} = props;

  // Add checked attr for options
  const [checkboxOptions, setCheckboxOptions] = useState<Option[]>(
    options.map((option: Option) => ({
      ...option,
      checked: values ? +values.includes(option.value) : 0
    }))
  );

  
  /**
   * Callback function When selectedOptions updated or toggle SelectAll
   *  
   * @param {Option[] | boolean} params
   */
  const onUpdateOptions = (params: CallbackType): void => { 
    
    let _checkboxOptions = [];

    if (typeof params !== 'number') {
      // When toggle single option 
      _checkboxOptions = params;
    } else {
      // When toggle SelectAll
      _checkboxOptions = params === 1 ? options.map((option: Option) => ({
        ...option,
        checked: 1   
      })) : [...options];
      
    }

    setCheckboxOptions(_checkboxOptions);
    // Pass selectedOptions to outside
    onChange && onChange(_checkboxOptions.filter((item: Option) => item.checked === 1));
  }
  

  
  // Pass props to SelectAll Component and CheckboxList Component
  const ComponentProps: SelectAllPropsType | CheckboxListPropsType = {
    options: checkboxOptions, 
    onChange: onUpdateOptions
  }


  return <div className={styles['multi-check']}>
    <div className={styles['multi-check-label']}>{label || "MultiCheck"}</div>
    <ul 
      className={`${styles['multi-check-options']}`} 
      style={{
        MozColumnCount: columns, 
        WebkitColumnCount: columns, 
        columnCount: columns
      }}
    >
      <SelectAll {...ComponentProps} />
      <CheckboxList {...ComponentProps} />
    </ul>
  </div>
}

export default MultiCheck;
