import React from 'react'
import { Products } from '../products'

function Home({user}) {
  
  return (
    <>
    <div className="text-center"> 
      <h1>Home Page</h1><Products user={user} />
      </div>
    </>
  )
}

export default Home