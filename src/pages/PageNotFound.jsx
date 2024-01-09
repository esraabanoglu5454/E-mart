import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <>
    <h1>Page not found!</h1>
    <Link to='/' className='btn btn-info'>Click for return the Home...</Link>
    </>
  )
}

export default PageNotFound