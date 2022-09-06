import React from 'react';
import { Table, Spinner } from 'react-bootstrap';

const DataTable = ({ filteredDataArray }) => {
  //If data isn't available, render "Loading..."
  if (filteredDataArray.length === 0) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  console.log('DATATABLE', filteredDataArray);

  return (
    <article>
      <Table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total</th>
            <th>Gas Fuel</th>
            <th>Solid Fuel</th>
            <th>Cement</th>
            <th>Gas Flaring</th>
            <th>Per Capita</th>
          </tr>
        </thead>
        <tbody>
          {/* map the data and render to table */}
          {filteredDataArray.map((data) => (
            <tr key={data['Row']}>
              <td>{data['Year']}</td>
              <td>{data['Total']}</td>
              <td>{data['Gas Fuel']}</td>
              <td>{data['Solid Fuel']}</td>
              <td>{data['Cement']}</td>
              <td>{data['Gas Flaring']}</td>
              <td>{data['Per Capita']}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </article>
  );
};

export default DataTable;
