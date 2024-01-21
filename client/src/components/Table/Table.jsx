import React from 'react'
import './Table.css'

const Table = ({Data}) => {
    const headerKeys = Object.keys(Data[0]);
  
    return (
      <table>
        <thead>
          <tr>
            {headerKeys.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Data.map((item, index) => (
            <tr key={index}>
              {headerKeys.map((key) => (
                <td key={key}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
              }

export default Table;