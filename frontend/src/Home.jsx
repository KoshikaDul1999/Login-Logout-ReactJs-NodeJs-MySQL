import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Home() {

  const [auth, setAuth] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    axios.get('')
    .then(res => {
      if(res.data.Status === "Success"){
        setAuth(true);
        setName(res.data.name);
      }
    })
  })

  return (
    <div className='container mt-4'>
      {
        auth ? 
        <div>
          <h3>You are Authorized {}</h3>
          <button className='btn btn-danger'>Logout</button>
        </div>
        :
        <div>
          <h3>{}</h3>
          <h3>Login Now</h3>
          <button className='btn btn-primary'>Login</button>
        </div>
      }
    </div>
  )
}

export default Home
