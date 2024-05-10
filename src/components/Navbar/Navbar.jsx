import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo/Logo'
import "./Navbar.css"


const Navbar = (Props) => {
  const [hamBurg, setHamBurg] = useState("false");

  const handleChange = () => {
    setHamBurg(!hamBurg);
  };
  return (
    <>
      <nav className="nav navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span onClick={handleChange}
            className={`${hamBurg ? 'fas fa-bars' : 'fas fa-times'} text-white`}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className='navbar-nav ms-auto'>
            <li className="nav-item">
              <Link aria-current="page" to="/">{Props.home}</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">{Props.about}</Link>
            </li>
            <li className="nav-item">
              <Link to="#">{Props.contact}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar