import { Link} from 'react-router-dom'




function CountryList({countries, setCountries}) {

    return ( 
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="list-group">
                        {countries.map((country) => (
                            <div key={country.alpha3Code} >
                                <Link className='list-group-item'
                                    to={`/${country.alpha3Code}`}
                                >{country.name.official}
                                </Link>
                            </div>
                        )) }
                        
                    </div>
                </div>
            </div>
            <div className='details'>
             
            </div>
        </div>
     );
}

export default CountryList;