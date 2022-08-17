import React from 'react'

const Dash = () => {
  const data = JSON.parse(localStorage.getItem("register"))
  console.log(4444, data)
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{item.email}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
            </tr>
          )})}

        </tbody>
      </table>
    </div>
  )
}

export default Dash