import React, { useState } from 'react';
import DropdownButton, { Variants } from 'terra-dropdown-button';
import  listDataJson from '../../data/list-data.json';
import ResultsTable from '../results-table';
import DropdownItems from '../dropdown-items';
import classes from "./employee-list.module.css";


const EmployeeList = () => {
  const defaultCity = 'default';
  const [city, setCity] = useState(defaultCity);
  const listData = listDataJson.data;
  let dataForTable = -1;


  const filteredData = (city) => {
    return listData.filter( function(person) {
      return person.location === city;
    });
  }

  const getSelectedData = (city) => {
    if (city === 'All') {
      return listData;
    } else {
      return filteredData(city);
    }
  }

  if (city !== defaultCity ) {
    dataForTable = getSelectedData(city);
  } 

  return (
    <div className={classes.dropdownContainer}>
      <DropdownButton
        label="Select by city"
        variant={Variants.EMPHASIS}
        isBlock={true}
      >
        <DropdownItems itemsData={listData} eventCallback={(location)=>setCity(location)}/>
      </DropdownButton>
      <div className={classes.dropdownInfo}>
        {dataForTable !== -1 ? city : 'Please select region'}
      </div>
      <div className={classes.tableContainer}>
        {dataForTable !== -1 && <ResultsTable results={dataForTable} />}
      </div>
    </div>
  );
};

export default EmployeeList;
