import React from 'react';
import { Item } from 'terra-dropdown-button';


const DropdownItems = (props) => {
    const cityNames = Array.from(new Set(props.itemsData.map(person=>person.location)));
    cityNames.push('All');

    return (
        <>
            {cityNames.map((city, index)=>
                <Item key={index} label={city} onSelect={(city) => props.eventCallback(city)} />
            )}
        </>
    )
};

export default DropdownItems;
