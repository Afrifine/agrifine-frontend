import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='m-4'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand text-success'>AGRIFINE</Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarCollapse">
                    <div className='navbar-nav'>

                    </div>
                    <div className="navbar-nav ms-auto">
                        <Link to='/'className='nav-item nav-link active text-success' >HOME</Link>
                        <Link to='/about' className='nav-item nav-link text-success'>ABOUT</Link>
                        <Link to='/products' className='nav-item nav-link text-success'>PRODUCT</Link>
                        <Link to='/' className="nav-item nav-link text-success">ACCOUNT</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar