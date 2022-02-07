import { Link, useParams } from 'react-router-dom'
import CountryList from './CountryList'

const CountryDetails = ({ data }) => {
    const { alpha3Code } = useParams()

    return (
        <div className="apiContainer">
            <div className="details">
                {data
                    .filter((country) => country.alpha3Code === alpha3Code)
                    .map((list) => (
                        <div>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${list.alpha2Code}.png`} alt="flag"></img>
                            <h1>País: {list.name.common}</h1>
                            <p>Capital: {list.capital} </p>
                            <p>Area: {list.area} km²</p>
                            <p>Borders: {list.borders.map((one) => (
                                <li><Link to={`/${one}`}>{one}</Link></li>
                            ))}</p>

                        </div>
                    ))
                }
                <Link className='btn btn-primary' to='/'>Voltar</Link>
            </div>
            <div>
                <CountryList  countries={data}/>
            </div>
        </div>
    );  
}

export default CountryDetails;