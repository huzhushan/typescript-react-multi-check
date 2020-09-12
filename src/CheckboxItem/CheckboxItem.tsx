import React, { ChangeEvent, memo } from 'react';
import styles from './CheckboxItem.scss';
import {Option} from '../MultiCheck/MultiCheck'

/**
 * checkbox status
 * use to set classname for wrapper element of the checkbox 
 */
export enum STATUS {
  "unchecked",
  "checked",
  "half-checked"
}

/**
 * 
 * @param {string} label - label text 
 * @param {string} value - value
 * @param {number} checked - 0: uncheckd  1: checked  2: half-checked
 * @param {Function} onChange - when option is changed, 
 *                              it should be passed to outside
 */
export type Props = Option & {
  onChange: (checked: number) => void
}


const CheckboxItem: React.FunctionComponent<Props> = (props): JSX.Element => {
  const {label, value, checked = 0, onChange} = props;

  /**
   * when checkbox changes:
   *  update status hooks
   *  pass checked status to outside
   *  
   * @param {ChangeEvent} event - event
   */
  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(+event.target.checked);
  }


  return <label className={styles['checkbox-wrapper']}>
    <div className={`${styles.checkbox} ${styles[STATUS[checked]] || ""}`}>
      <input 
        type="checkbox" 
        checked={checked === 1} 
        className={styles['checkbox-input']} 
        value={value} 
        onChange={onCheckboxChange} 
      />
      <div className={styles['checkbox-inner']}></div>
    </div>
    <div>{label}</div>
  </label>
}

export default memo(CheckboxItem);