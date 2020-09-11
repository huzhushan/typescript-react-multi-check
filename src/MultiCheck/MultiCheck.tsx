import React, { useState, useEffect } from 'react';
import styles from './MultiCheck.scss';
import SelectAll, {Props as SelectAllPropsType} from '../SelectAll';
import CheckboxList, {Props as CheckboxListPropsType} from '../CheckboxList'


export type Option = {
  label: string,
  value: string
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
  const {label, options, values, columns, onChange} = props;

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  useEffect(() => {
    const _selectedOptions = options.filter((option: Option) => values!.includes(option.value));
    setSelectedOptions(_selectedOptions)
  }, [])
  
  // Callback function when checkbox changes
  const onUpdateOptions = (): void => {

  }

  const SelectAllProps: SelectAllPropsType = {
    optionsLength: options.length, 
    selectedLegth: selectedOptions.length,
    onChange: onUpdateOptions
  }

  const CheckboxListProps: CheckboxListPropsType = {
    options, 
    selectedOptions,
    onChange: onUpdateOptions
  }

  return <div className={styles['multi-check']}>
    <div className={styles['multi-check-label']}>{label}</div>
    <ul className={styles['multi-check-options']} style={{MozColumnCount: columns, WebkitColumnCount: columns, columnCount: columns}}>
      <SelectAll {...SelectAllProps} />
      <CheckboxList {...CheckboxListProps} />
    </ul>
  </div>
}

export default MultiCheck;
