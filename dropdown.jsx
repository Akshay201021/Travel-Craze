import React from 'react';
import './dropdown.css'
import {useHistory} from 'react-router-dom';

const Dropdown = () => {
const history = useHistory();

  const handleDropdownChange = (event) => {
    const  selectedValue = event.target.value;
    history.push(selectedValue);
  };
  return(
    <div className='main'>
      <select className="custom-dropdown" onChange={handleDropdownChange}>
        <option value="/">Home</option>
        <option value="/dallas">Dallas</option>
        <option value="/delhi">New Delhi</option>
        <option value="/hyderabad">Hyderabad</option>
        <option value="/newyork">New York</option>
        <option value="/sanfrancisco">San Francisco</option>
    
        </select>
    </div>
  )
}

export default Dropdown