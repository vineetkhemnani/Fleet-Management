import { useState } from 'react'

const Login = ({ setIsAuthenticated, users }) => {
  //   state to store username
  const [username, setUsername] = useState('')
  //   state to store password
  const [password, setPassword] = useState('')

  // handlers for username password and login
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleUserLogin = () => {
    const user = users.find(
      (before) => before.username === username && before.password === password
    )
    if (user) {
      setIsAuthenticated(true)

      console.log('Logged in')
    } else {
      console.log('Invalid credentials')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Fleet Management
        </h1>

        {/* Username block */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* password block */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* login button block */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            onClick={() => handleUserLogin()}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
