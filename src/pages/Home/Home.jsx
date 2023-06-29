import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import LoginRegister from '../../components/loginRegister/LoginReg'

const Home = () => {
  const [isLogedIn, setLogIn] = useState(false)
  return (
    <main>
      <Navbar isLogedIn={isLogedIn} />
      {isLogedIn ? <Header /> : <LoginRegister />}
      <Outlet />
    </main>
  )
}

export default Home
