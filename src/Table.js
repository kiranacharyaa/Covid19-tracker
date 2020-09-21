import React from 'react'
import {formatNumbers} from './util';

function Table({countries}) {    
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Flat</th>
                        <th>Country</th>
                        <th className="text-right">Total Cases</th>
                        <th className="text-right">Active Cases</th>
                        <th className="text-right">Total Recovered</th>
                        <th className="text-right">Total Deaths</th>
                        <th className="text-right">Population</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((data) => (
                        <tr key={data.country}>
                            <td><img src={data.countryInfo.flag} width="30px" alt=""/></td>
                            <td>{data.country}</td>
                            <td className="text-right"><small className="text-red">+{formatNumbers(data.todayCases)}</small> <br/> {formatNumbers(data.cases)}</td>
                            <td className="text-right">{formatNumbers(data.active)}</td>
                            <td className="text-right"><small className="text-green">+{formatNumbers(data.todayRecovered)}</small> <br/> {formatNumbers(data.recovered)}</td>
                            <td className="text-right">{formatNumbers(data.deaths)}</td>
                            <td className="text-right">{formatNumbers(data.population)}</td>
                        </tr>
                    ))}      
                </tbody>              
            </table>
        </div>
    )
}

export default Table
