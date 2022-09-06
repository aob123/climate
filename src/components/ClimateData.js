import { React, useEffect, useState } from 'react';
import DataTable from './DataTable';
import FilterBar from './FilterBar';

const ClimateData = () => {
  //Set data state
  const [dataArray, setData] = useState([]);
  const [filteredDataArray, setFilteredDataArray] = useState([]);

  //Get data from API and set state on load.
  useEffect(() => {
    async function getData() {
      const url = 'https://my.api.mockaroo.com/co2.json?key=8eb9e6f0';
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
      setFilteredDataArray(data);
    }
    getData();
  }, []);

  //Filter and sort data
  const handleFilterClick = (dateFrom, dateTo, sort) => {
    setFilteredDataArray(...dataArray);
    let theData = [...dataArray];
    if (dateFrom > 0 && dateTo < 3000) {
      theData = theData.filter(
        (data) => data['Year'] >= dateFrom && data['Year'] <= dateTo
      );
    }

    //Sort data by ascedning or descending
    if (sort === 'ASC') {
      theData.sort((a, b) => a['Year'] - b['Year']);
    } else if (sort === 'DESC') {
      theData.sort((a, b) => b['Year'] - a['Year']);
    }

    setFilteredDataArray(theData);
    // console.log(theData);
  };

  return (
    <section>
      <h2>Climate Data</h2>
      <FilterBar handleFilterClick={handleFilterClick} />
      <DataTable filteredDataArray={filteredDataArray} />
    </section>
  );
};

export default ClimateData;
