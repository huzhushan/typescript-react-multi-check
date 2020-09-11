import styles from './MultiCheck.scss';

import React from 'react';

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
  return <div className={styles['multi-check']}>
    <div className={styles['multi-check-label']}>Status</div>
    <ul className={styles['multi-check-options']}>
      <li>
        <label className={styles['checkbox-wrapper']}>
          <div className={`${styles.checkbox}`}>
            <input type="checkbox" className={styles['checkbox-input']} />
            <div className={styles['checkbox-inner']}></div>
          </div>
          <div>Select All</div>
        </label>
      </li>
      <li>
        <label className={styles['checkbox-wrapper']}>
          <div className={`${styles.checkbox}`}>
            <input type="checkbox" defaultChecked className={styles['checkbox-input']} />
            <div className={styles['checkbox-inner']}></div>
          </div>
          <div>1111</div>
        </label>
      </li>
      <li>
        <label className={styles['checkbox-wrapper']}>
          <div className={`${styles.checkbox}`}>
            <input type="checkbox" className={styles['checkbox-input']} />
            <div className={styles['checkbox-inner']}></div>
          </div>
          <div>222</div>
        </label>
      </li>
      <li>
        <label className={styles['checkbox-wrapper']}>
          <div className={`${styles.checkbox}`}>
            <input type="checkbox" className={styles['checkbox-input']} />
            <div className={styles['checkbox-inner']}></div>
          </div>
          <div>3333</div>
        </label>
      </li>
      <li>
        <label className={styles['checkbox-wrapper']}>
          <div className={`${styles.checkbox}`}>
            <input type="checkbox" className={styles['checkbox-input']} />
            <div className={styles['checkbox-inner']}></div>
          </div>
          <div>44444</div>
        </label>
      </li>
    </ul>
  </div>
}

export default MultiCheck;
