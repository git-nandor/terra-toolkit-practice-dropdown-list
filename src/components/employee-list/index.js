import React, { useState, useEffect } from 'react';
import DropdownButton, { Item, Variants } from 'terra-dropdown-button';
import ResultsTable from '../results-table';
import classes from "./employee-list.module.css";

const EmployeeList = (listDataJson) => {
    const defaultCity = 'default';
    const [city, setCity] = useState(defaultCity);
    const [dataForTable, setDataForTable] = useState(-1);
    // const listData = JSON.parse(listDataJson); origin error? invalid json?
    const listData = listDataJson.listData.data;
    
    const getSelectedData = (city) => {
      switch (city) {
          case 'All':
          return listData;

          case defaultCity:  
          return -1;

          default:
          let dataByLocation = listData.filter( function(person) {
            return person.location === city;
          });
          return dataByLocation;
        };
    }

    const startGatheringProcess = (city) => {
      let localizedData = getSelectedData(city);
      setDataForTable(localizedData);
    }

    useEffect(() => {
      startGatheringProcess(city);   
    }, [city]);

  return (
    <div className={classes.dropdownContainer}>
      <DropdownButton
        label="Select by city"
        variant={Variants.EMPHASIS}
        isBlock={true}
      >
        <Item label="Budapest" onSelect={() => setCity('Budapest')} />
        <Item label="Debrecen" onSelect={() => setCity('Debrecen')} />
        <Item label="Szeged" onSelect={() => setCity('Szeged')} />
        <Item label="All" onSelect={() => setCity('All')} />
      </DropdownButton>
      <div className={classes.dropdownInfo}>
        { city !== defaultCity ? city : 'Please select region'}
      </div>
      <div className={classes.tableContainer}>
        {dataForTable !== -1 && <ResultsTable results={dataForTable} />}
      </div>
    </div>
  );
};

export default EmployeeList;
