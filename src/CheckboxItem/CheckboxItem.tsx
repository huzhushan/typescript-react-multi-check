import React, { useState, useEffect, ChangeEvent } from 'react';
import styles from './CheckboxItem.scss';
import {Option} from '../MultiCheck/MultiCheck'

/**
 * checkbox status
 */
export enum STATUS {
  unchecked,
  checked,
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
  checked: number,
  onChange: (checked: boolean) => void
}


const CheckboxItem: React.FunctionComponent<Props> = (props): JSX.Element => {
  const {label, value, checked, onChange} = props;

  const [status, setStatus] = useState(checked);
  useEffect(() => {
    setStatus(checked);
  }, [checked]);

  // Callback function when checkbox changes
  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setStatus(+event.target.checked);
  }

  return <label className={styles['checkbox-wrapper']}>
    <div className={`${styles.checkbox} ${styles[STATUS[status]] || ""}`}>
      <input type="checkbox" checked={status === 1} className={styles['checkbox-input']} value={value} onChange={onCheckboxChange} />
      <div className={styles['checkbox-inner']}></div>
    </div>
    <div>{label}</div>
  </label>
}

export default CheckboxItem;