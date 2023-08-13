import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { columns } from './Copmonents/ColData';

function App() {
  const [data, setData] = useState([]);

  // const columns = [
  //   { title: 'Issues', field: 'issue' },
  //   { title: 'Status', field: 'status', lookup: { done: 'Done', inProgress: 'In Progress', todo: 'To Do' } },
  // ];

  return (
    <div className="App">
      <h1 align="center">Bug List</h1>
      <MaterialTable
        title="Bugs and Issues Data"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }];
            setTimeout(() => {
              setData(updatedRows);
              resolve();
            }, 2000);
          }),
          onRowDelete: (selectedRow) => new Promise((resolve) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data];
            updatedRows.splice(index, 1);
            setTimeout(() => {
              setData(updatedRows);
              resolve();
            }, 2000);
          }),
          onRowUpdate: (updatedRow, oldRow) => new Promise((resolve) => {
            const index = oldRow.tableData.id;
            const updatedRows = [...data];
            updatedRows[index] = updatedRow;
            setTimeout(() => {
              setData(updatedRows);
              resolve();
            }, 2000);
          }),
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: 'first',
        }}
      />
    </div>
  );
}

export default App;
