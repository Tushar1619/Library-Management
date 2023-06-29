import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function LoginRegister() {
  const [isLogin, setLogin] = useState(true)
  const button = () => {
    if (isLogin == true) {
      return 'Register'
    }
    return 'Login'
  }
  return (
    <div>
      {isLogin ? <Login /> : <Register />}
      <button>{button()}</button>
    </div>
  )
}
