import { useParams } from 'react-router-dom'

const DroneData = ({drones}) => {
  const { id } = useParams()

  const droneData = drones.find((drone) => drone.id === id)

  if (!droneData) {
    return <p className="text-center text-red-500 mt-10">Drone not found</p>
  }

  const {
    status,
    flight_hours,
    battery_status,
    last_known_location,
    current_mission,
    maintenance_logs,
  } = droneData

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        {id} Data
      </h1>
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="border-b pb-4 mb-4">
          <p className="text-xl font-semibold mb-2">
            Drone ID: <span className="font-normal">{id}</span>
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Status:</span>{' '}
            <span
              className={`${
                status === 'Available'
                  ? 'bg-green-500'
                  : status === 'In-flight'
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              } text-white rounded-md p-2 px-4`}
            >
              {status}
            </span>
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Flight Hours:</span> {flight_hours}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Battery Status:</span>{' '}
            {battery_status}
          </p>
          <p className="text-lg mb-2">
            <span className="font-semibold">Last Known Location:</span>{' '}
            {last_known_location[0]}, {last_known_location[1]}
          </p>
          <p className="text-lg mb-6">
            <span className="font-semibold">Current Mission:</span>{' '}
            {current_mission}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            Maintenance Logs:
          </h2>
          {maintenance_logs.length > 0 ? (
            maintenance_logs.map((log, key) => (
              <div
                key={key}
                className="mb-4 p-4 bg-gray-100 rounded-lg shadow-inner border-l-4 border-blue-600"
              >
                <p className="text-lg mb-2">
                  <span className="font-semibold">Date:</span> {log.date}
                </p>
                <p className="text-lg mb-2">
                  <span className="font-semibold">Details:</span>{' '}
                  {log.description}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Technician:</span>{' '}
                  {log.technician}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No maintenance logs available.
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default DroneData
