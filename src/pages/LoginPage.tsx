import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/userSlice'
import type { AppDispatch } from '../store/store'

function LoginPage() {
  const [name, setName] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border rounded px-2 py-1 mb-4"
      />
      <button
        onClick={() => dispatch(login(name))}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage
