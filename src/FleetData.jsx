import { Link } from 'react-router-dom'

const FleetData = ({drones}) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Fleet Data</h1>
      <ul className="text-center">
        <div className="grid grid-cols-4 gap-4 text-lg font-semibold bg-gray-200 p-3 rounded-md">
          <p>Drone Id</p>
          <p>Status</p>
          <p>Flight Hours</p>
          <p>Battery Details</p>
        </div>
        {drones.map((drone) => (
          <Link
            to={`/drones/${drone.id}`}
            key={drone.id}
            className="grid grid-cols-4 gap-4 items-center border-b py-4 hover:bg-gray-100"
          >
            <p>{drone.id}</p>
            <p
              className={`${
                drone.status === 'Available'
                  ? 'bg-green-500 text-white'
                  : drone.status === 'In-flight'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-red-500 text-white'
              } rounded-md p-2 w-3/4 mx-auto text-center`}
            >
              {drone.status}
            </p>
            <p>{drone.flight_hours}</p>
            <p>{drone.battery_status}</p>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default FleetData
