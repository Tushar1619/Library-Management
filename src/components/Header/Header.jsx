import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
           Search For Your Books
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
          A place where you can find, issue, and buy books.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header
