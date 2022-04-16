import React from 'react'

const SelectTask = ({ onChange, onBlur, name, label }, ref) => {
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="1">20</option>
      <option value="2">30</option>
      <option value="3">40</option>
    </select>
  </>;
};

export default SelectTask;
