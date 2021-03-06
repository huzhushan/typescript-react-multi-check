import React, { ChangeEvent, memo } from 'react';
import styles from './Checkbox.scss';
import { Option } from '../MultiCheck/MultiCheck'

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
 * @param {boolean} checked - 
 * @param {Function} onChange - when option is changed, 
 *                              it should be passed to outside
 */
export type Props = Option & {
  defaultChecked?: boolean,
  halfChecked?: boolean,
  onChange?: (checked: boolean) => void
}


const Checkbox: React.FunctionComponent<Props> = (props): JSX.Element => {
  const { label, value, checked = false, halfChecked = false, defaultChecked, onChange } = props;

  /**
   * when checkbox changes:
   *  update status hooks
   *  pass checked status to outside
   *  
   * @param {ChangeEvent} event - event
   */
  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(event.target.checked);
  }


  const checkboxProps = {
    type: "checkbox",
    className: styles['checkbox-input'],
    value,
    onChange: onCheckboxChange,
    ...('defaultChecked' in props ? { defaultChecked } : {}),
    ...('checked' in props ? { checked } : {})
  }




  return <label className={styles['checkbox-wrapper']}>
    <div className={`${styles.checkbox} ${styles[STATUS[halfChecked ? 2 : +checked]]}`}>
      <input {...checkboxProps} />
      <div className={styles['checkbox-inner']}></div>
    </div>
    <div>{label}</div>
  </label>
}

export default memo(Checkbox);