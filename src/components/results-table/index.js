import React from 'react';
import Table from 'terra-table';
import {v4 as unicId} from 'uuid'; 


const ResultsTable = (data) => {
    const results = data.results;
    const tableData = [
        {
            rows:[]
        }
    ];

    for(let personIndex in results) {
        tableData[0].rows.push(
            {
                key: `row-${unicId()}`,
                cells: [
                    { key: `cell-${unicId()}`, children: results[personIndex].name },
                    { key: `cell-${unicId()}`, children: results[personIndex].position },
                    { key: `cell-${unicId()}`, children: results[personIndex].location },
                ],
            }
        )
    };

    return (
        <Table
            summaryId="standard-table"
            summary="This table has standard padding."
            numberOfColumns={3}
            cellPaddingStyle="standard"
            dividerStyle="horizontal"
            headerData={{
                cells: [
                    { id: 'header-name', key: 'name', children: 'Name' },
                    { id: 'header-position', key: 'position', children: 'Position' },
                    { id: 'header-location', key: 'location', children: 'Location' },
                ],
            }}
            bodyData={tableData}
        />
    );
};
export default ResultsTable;