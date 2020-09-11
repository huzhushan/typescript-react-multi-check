import React from 'react';
import CheckboxItem from '../CheckboxItem';

export type Props = {
  optionsLength: number,
  selectedLegth: number,
  onChange: (boo: boolean) => void
}

const SelectAll: React.FunctionComponent<Props> = (props): JSX.Element => {
  const onSelectAllChange = () => {

  }

  return <li><CheckboxItem label="Select All" value="" checked={2} onChange={onSelectAllChange} /></li>
}
export default SelectAll