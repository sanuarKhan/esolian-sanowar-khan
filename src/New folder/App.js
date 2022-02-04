import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [countries, setCountries]= useState([]);
  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/all")
  //   .then(res => res.json())
  //   .then(data =>{ setCountries(data);
  //                 console.log(data)
  //                 const names = data.map(con => con.name);
  //                 console.log(names);
  //   })
  //   .catch(error => console.log(error))
  // } , [])

  return (
    <div>
        <h2>Countries is loaded : { countries.length}</h2>
        <ul>
        {countries.map(con => colsole.log(con))}
        </ul>
    </div>
  );
}

export default App;
