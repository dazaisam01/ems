import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("emial is",email)
    console.log("password is",password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-red-500 rounded-xl p-20 border-red-500 ">
        <form
          className="flex flex-col items-center justify-center "
          onSubmit={(e) => {
            submitHandler(e)
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-2 text-white outline-none bg-transparent border-red-500 px-5 py-3 mt-2 mb-2 text-xl font-semibold rounded-full placeholder:text-white"
            type="email"
            placeholder="Enter your Email"
          />
          <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
            className="border-2 text-white outline-none bg-transparent border-red-500 px-5 py-3 mt-2 mb-2 text-xl font-semibold rounded-full placeholder:text-white"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="border-2 text-white border-none px-5 py-3 mt-2 mb-2 text-xl font-semibold rounded-full bg-red-600">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
