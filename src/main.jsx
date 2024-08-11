import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import DroneData from './DroneData.jsx'
import FleetData from './FleetData.jsx'
import data from './data.json'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <FleetData drones={data.drones} />,
      },
      {
        path: 'drones',
        element: <FleetData drones={data.drones} />,
      },
      {
        path: 'drones/:id',
        element: <DroneData drones={data.drones} />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
