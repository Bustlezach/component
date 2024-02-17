import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(prev => option)
  };

  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Blue', value: 'blue'},
    {label: 'Green', value: 'green'},
  ];
  
  return(
    <div className='flex'>
      <Dropdown
     options={options} 
     value={selected} 
     onChange={handleSelect} 
    />
    </div>
  );
}

export default DropdownPage;
