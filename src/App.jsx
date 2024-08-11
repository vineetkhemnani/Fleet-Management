import { useEffect, useState } from 'react'
import data from './data.json'
import Login from './Login'
import { Outlet, useNavigate } from 'react-router-dom'
function App() {
  // check user authenticated or not
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // users from json
  const [users, setUsers] = useState(data.users)
  // drone data from json
  const [drones, setDrones] = useState(data.drones)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/drones')
    } else {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return (
    <>
      {isAuthenticated ? (
        <>
          <Outlet />
        </>
      ) : (
        <Login setIsAuthenticated={setIsAuthenticated} users={data.users} />
      )}
    </>
  )
}

export default App
