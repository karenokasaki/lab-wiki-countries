import { useState, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'



function Api() {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://ih-countries-api.herokuapp.com/countries')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            Os dados estão sendo acessados pela API
            {countries.map((country) => (
                <div className='cotainer'>
                    <Link to={`/api/${country.alpha3Code}`}>  <h2>{country.name.common}</h2> </Link>
                </div>
            ))}

        </div>


    );
}

export default Api;