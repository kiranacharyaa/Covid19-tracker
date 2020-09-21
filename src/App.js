import React, {useEffect, useState} from 'react';
import InfoBox from './InfoBox';
import Table from './Table';
import {sortData} from './util';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(["Worldwide"]);
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data);
    })
  },[]);

  useEffect(()=> {
    const getCountriesData = async () => {
      fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(data => {
        const countries = data.map((country)=>(
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ));
        const sortedData = sortData(data);
        setCountries(countries);
        setTableData(sortedData);
      });
    }
    getCountriesData();
  },[]);
  console.log(tableData);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url = (countryCode === "Worldwide") ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode);
      setCountryInfo(data);
    })
  }

  return (
    <div className="body">
      <div className="page-header">
        <h1>Worldwide Covid-19 Stats</h1>
      </div>
      <div className="container">
        <div className="app">
          <div className="app_header">
            <h3>Covid 19 Tracker <small className="text-muted">(Updated every 10mins)</small></h3>
            <form>
              <select className="form-control" onChange={onCountryChange}>
                <option value="Worldwide">Worldwide</option>
                {countries.map((items)=><option value={items.value}>{items.name}</option>)}
              </select>
            </form>
          </div>

          <div className="app_stats">
            <div className="row">
              <InfoBox classname="card total-cases" title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
              <InfoBox classname="card total-recovered" title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
              <InfoBox classname="card total-deaths" title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
            </div>
          </div>

          <br /><hr /><br />

          <div className="app_data">
            <h3>Full list of Cases by Country <small className="text-muted">(Updated every 1hr)</small></h3>
            <br/>
            <Table countries={tableData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
