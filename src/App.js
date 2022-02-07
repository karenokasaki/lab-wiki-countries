
import './App.css';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails'
import Api from './components/Api'
import ApiDetails from './components/ApiDetails'

import countriesData from './countries.json'

import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    setCountries(countriesData)
  }, [])

  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/:alpha3Code' element={<CountryDetails data={countries} />} />
        <Route path='/api' element={<Api />} />
        <Route path='/' exact element={<CountryList countries={countries} setCountries={setCountries} />} />
        <Route path="/api/:alpha3Code" exact element={<ApiDetails data={countriesData}/>}/>

      </Routes>


    </div>
  );
}

export default App;
