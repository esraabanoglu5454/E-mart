import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ item, user }) {
  
  
  if (!item) {
    return null;
  }

  const { image, title, description, price } = item;

  
  const truncatedDescription = description
    ? `${description.substring(0, 45)}...`
    : "";
  const productUrl = `/products/product/${item.id}`

  function handleclick(product) {
    let localFavs=JSON.parse(localStorage.getItem('Favs'))??[]
    let itemIndex=localFavs.findIndex(localItem => product.id===localItem.id)
    if (itemIndex >= 0) {
      localFavs=localFavs.filter(item => item.id!==product.id)
  }
    else{
      localFavs.push({id:product.id,title:product.title})
    }
    localStorage.setItem('Favs', JSON.stringify(localFavs))
  }
  return (
    <div className="col-sm-3 mb-3">
      <div className="card h-100">
        <Link to={productUrl}>
        <img src={image} className="card-img-top" alt={title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" >{truncatedDescription}</p>
          <p className="lead">{price}</p>
          {user && <a href="#" className="btn btn-primary" onClick={()=>handleclick(item)}>Fav</a>}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;