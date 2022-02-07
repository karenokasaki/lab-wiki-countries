import { Link } from 'react'


function Navbar() {
    return ( 
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <a className="navbar-brand" href="/">LAB - WikiCountries</a>
                <a className="navbar-brand" href='/api'>API - Teste</a>
            </div>
        </nav>
     );
}

export default Navbar;