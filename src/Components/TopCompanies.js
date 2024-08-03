import React, { useEffect, useState } from 'react';

const TopCompanies = ({countryKey,category}) => {
//   const countryKey = 'in';
//   const category = 'it-jobs';
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    topCompanies();
  }, []);

  const topCompanies = async () => {
    const data = await fetch(
      `https://api.adzuna.com/v1/api/jobs/${countryKey}/top_companies?app_id=4a19f856&app_key=5d047d2e363e2e043e36902530dd8793&category=${category}`
    );
    const dataJson = await data.json();
    setCompanies(dataJson.leaderboard);
  };

  return (
    <div>
      <h1>Top Companies</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Company</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={company.canonical_name}>
              <td>{index + 1}</td>
              <td>{company.canonical_name}</td>
              <td>{company.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopCompanies;
