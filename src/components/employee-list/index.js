import React, { useState } from 'react';
import DropdownButton, { Item, Variants } from 'terra-dropdown-button';


const EmployeeList = () => {
    const [message, setMessage] = useState('No option clicked');

  return (
    <div>
      <DropdownButton
        label="Dropdown"
        variant={Variants.EMPHASIS}
      >
        <Item label="Budapest" onSelect={() => setMessage('1st option clicked')} />
        <Item label="Debrecen" onSelect={() => setMessage('2nd option clicked')} />
        <Item label="Szeged" onSelect={() => setMessage('3rd option clicked')} />
        <Item label="All" onSelect={() => setMessage('4th option clicked')} />
      </DropdownButton>
      <p>{message}</p>
    </div>
  );
};

export default EmployeeList;
