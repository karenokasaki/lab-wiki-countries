import { Link, useParams } from 'react-router-dom'


const CountryDetails = ({ data }) => {
    const { alpha3Code } = useParams()


    return (
        <div className="col-7">
            {
                data
                    .filter((country) => country.alpha3Code === alpha3Code)
                    .map((list) => (
                        <div>
                            <h1>País: {list.name.common}</h1>
                            <p>Capital: {list.capital} </p>
                            <p>Area: {list.area} km²</p>
                            <p>Borders: {list.borders.map((one) => (
                                <li><Link to={`/${one}`}>{one}</Link></li>
                            ))}</p>

                        </div>
                    ))
            }

        </div>
    );
}

export default CountryDetails;