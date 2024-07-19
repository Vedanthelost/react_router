import React from 'react'
import {Link} from 'react-router-dom'

const home = () => {
  return (
    <div>home
      <Link to="/about">about</Link>
    </div>
  )
}

export default home