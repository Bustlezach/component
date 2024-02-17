import React, { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => { 
    if (!divEl) return;
      const {target} = event;
      const dropdown = divEl.current;
      if(!dropdown.contains(target)) {
        setIsOpen(prev => false);
      }
    };
    document.addEventListener('click', handler, true);

    const cleanUp = () => {
      document.removeEventListener('click', handler);
    };

    return cleanUp;
  }, []);

  const handleClick = () => {
    setIsOpen(prev => (!prev));
  };

  const handleOptionClick = (options) => {
    setIsOpen(prev => (false));
    onChange(options);
  };

  const renderOptions = options.map(option => {
    return <div
     className='hover:bg-sky-100 rounded cursor-pointer p-1'
     key={option.value}
     onClick={() => handleOptionClick(option)}
    >
      {option.label}
    </div>;
  });

  let content = 'Select...';
  if(value) content = value.label;

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel 
        onClick={handleClick}
        className='flex justify-between item-center cursor-pointer'
      >
        {content} 
        <GoChevronDown className='text-lg'/>
      </Panel>
      {isOpen && 
      <Panel className='absolute top-full'>
        {renderOptions}
      </Panel>}
    </div>
  )
}


export default Dropdown;