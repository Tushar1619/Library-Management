import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import LoginRegister from '../../components/loginRegister/LoginReg'

const Home = () => {
  
  // localStorage.clear();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   setIsLoggedIn(token !== null);
  // }, []);

  return (
    <main>
      <Navbar />
      {!localStorage.getItem('token') && <LoginRegister />}
      {localStorage.getItem('token') && (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </main>
  )
}

export default Home