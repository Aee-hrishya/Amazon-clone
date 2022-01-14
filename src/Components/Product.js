import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./Product.css";


function Product({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs </small>
          <strong>{price}</strong>
        </p>
        
      </div>


      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;