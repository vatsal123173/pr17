import React, { useState, useEffect } from 'react'

const StudentList = () => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        return response.json()
      })
      .then((data) => {
        setStudents(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="mx-auto mt-10 max-w-2xl rounded-lg bg-white p-6 shadow-lg">
      <h1 className="mb-5 text-center text-2xl font-bold text-blue-600">
        Student List
      </h1>

      {loading ? (
        <p className="text-center">Loading students...</p>
      ) : students.length === 0 ? (
        <p className="text-center text-red-500">
          Unable to load student records.
        </p>
      ) : (
        students.map((student) => (
          <div
            key={student.id}
            className="mb-3 rounded border p-4"
          >
            <h2 className="font-bold text-gray-800">
              {student.name}
            </h2>

            <p className="text-gray-600">
              Email: {student.email}
            </p>

            <p className="text-gray-600">
              City: {student.address.city}
            </p>
          </div>
        ))
      )}
    </div>
  )
}

export default StudentList