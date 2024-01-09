import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Fav({user}) {
    const [favs, setFavs] = useState([])
    useEffect(() => {
      const storedFavs = JSON.parse(localStorage.getItem('Favs')) ?? [];
      setFavs(storedFavs);
      console.log('Favs:', favs);
  }, []);
  
  return (
    <>
    <h1>Fav</h1>
    <div className="list-group">
        {
          favs.map((item) =>
          <Link
          key={item.id}
          className="list-group-item list-group-item-action"
          to={`/products/Product/${item.id}`}>
            {item.title.toUpperCase()}
          </Link>
          )
        }
        </div>
    </>
  )
}

export default Fav