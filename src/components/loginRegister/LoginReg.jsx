import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function LoginRegister() {
  const [isLogin, setLogin] = useState(true)
  return (
    <div >
      <div className="flex py-8 items-center justify-center">
        <button
          onClick={() => {
            setLogin(false)
          }}
          className="border border-solid border-purple-700 p-4 w-48"
        >
          Register
        </button>
        <button
          onClick={() => {
            setLogin(true)
          }}
          className="border border-solid border-purple-700 p-4 w-48"
        >
          Login
        </button>
      </div>
      {isLogin ? <Login /> : <Register />}
    </div>
  )
}
