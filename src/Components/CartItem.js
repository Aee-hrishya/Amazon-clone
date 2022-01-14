import { useStateValue } from "../context/StateProvider";
import "./CartItem.css";

function CartItem({image,id,price,title}) {

    const [{basket}, dispatch] = useStateValue();

   const removeItem = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            payload:{
                id
            }
            
        });
   }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>Rs </small>
                    <strong>{price}</strong>
                </p>

            <button onClick={removeItem} >Remove from Basket</button>
            </div>
        </div>
    );
}

export default CartItem;