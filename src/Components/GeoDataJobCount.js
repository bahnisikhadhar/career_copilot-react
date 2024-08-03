
import React, { useEffect, useState } from 'react';
import './styles/Analyzer.module.css';

const GeoDataJobCount = ({countryKey,category}) => {
  // const countryKey = 'in';
  // const category = 'it-jobs';
  const [regionalData, setRegionalData] = useState([]);

  useEffect(() => {
    regionalJobCount();
  }, []);

  const regionalJobCount = async () => {
    const data = await fetch(
      `https://api.adzuna.com/v1/api/jobs/${countryKey}/geodata?app_id=4a19f856&app_key=5d047d2e363e2e043e36902530dd8793&category=${category}`
    );
    const dataJson = await data.json();
    console.log(dataJson.locations);
    setRegionalData(dataJson.locations)
  };

  return (
    <div>
      <h1 style={{position:"sticky",top:-16, backgroundColor:"white",padding:".5rem"}}>JobsCount in Areas </h1>
      <table>
        <thead>
          <tr>
            <th>Slno</th>
            <th>JobCounts</th>
            <th>Area</th>
          </tr>
        </thead>
        <tbody>
          {regionalData.map((region, index) => (
            <tr key={region.count}>
              <td>{index + 1}</td>
              <td>{region.count}</td>
              <td>{region.location.display_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeoDataJobCount;