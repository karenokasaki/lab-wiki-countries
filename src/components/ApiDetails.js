// .../api/xxx
import { useParams, Link } from 'react-router-dom'
import Api from './Api'
import '../index.css'



const ApiDetails = ({ data }) => {
    const { alpha3Code } = useParams()
    console.log(alpha3Code)
    return (
        <div className='apiContainer'>
            <Api />
            {data
                .filter((list) => list.alpha3Code === alpha3Code)
                .map((list) => (
                    <div key={list._id} className="details">
                        <h2>País: {list.name.common}</h2>
                        <p>Região: {list.region}</p>
                        <p>Sub Região: {list.subregion}</p>
                        <p>Capital: {list.capital}</p>
                        <Link className="btn btn-warning" to='/api'>Voltar para API Home</Link>
                    </div>
                ))}
        </div>
    );
}

export default ApiDetails;