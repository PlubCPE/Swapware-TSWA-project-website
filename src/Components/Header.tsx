import { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import { Route } from 'react-router';


const Header : FC = () => {
  const [isDarkMode,setIsDarkMode] = useState(false);

  // const toggleDarkMode = () =>{
  //   setIsDarkMode(!isDarkMode);
  //    var elemment = document.body;
  //    elemment.dataset.bsTheme = elemment.dataset.bsTheme == "light" ? 'dark' : 'light';
  // }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#Home">
        SwapWare
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href='MemberProfile'>
              Member Profile
            </a>
          </li>
            
          <li className="nav-item">
            <a className="nav-link" href="Files">
              Files
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Document">
              Prototype Document
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="SourceCode">
              Source Code
            </a>
          </li>
        </ul>
      </div>
      <div className='toggle-container form-check form-switch mx-4 '>
        <input 
          className='form-check-input p-2'
          type='checkbox'
          role='switch'
          id='check'
          //onClick={toggleDarkMode}
          />
      </div>
    </div>
  </nav>
  )
}

export default Header