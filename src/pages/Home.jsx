import React, { useEffect } from 'react'
import Axios from 'axios'

function Home() {
  useEffect(() => {
    Axios.get('/config').then((response) => console.log(response.data))
  }, [])

  return (
    <div>
      Home
    </div>
  )
}

export default Home
