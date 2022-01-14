import { useStateValue } from "../context/StateProvider";
import "./Cart.css";
import CartItem from "../Components/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const navigate = useNavigate();//useNavigate hook  to navigate to a specific location

  const [{ basket, user }, dispatch] = useStateValue();

  //Here is the technique to calculate the amount
  let amount = 0;
  basket.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.price);
  });

  const checkout = () => {

    
    if (user) {
      
      //here I am unsetting the user and then navigating to the homepage but here I can add the payment gateway integration
      dispatch({
        type: "UNSET_USER"
      });

      navigate("/") //Redirecting to the homepage
    }
    else{

      //Now we unset everything as the user is not logged in all the items added in the basket before loggin in will be removed
      dispatch({
        type: "UNSET_USER"
      });

      alert("Please sign in first");

      navigate("/signin");//Redirecting the user to the signin page
    }

  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>You have no items in your basket</p>
          </div>
        ) :
          (<div>

            <h2 className="checkout__title">Your shopping Basket</h2>

            {basket.map(item => (
              <CartItem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}

          </div>)}
      </div>

      <div className="checkout__right">
        {/* Here we calculate the basket total */}
        <h4>Subtotal ({basket?.length}) items: <small>Rs.</small> {amount}</h4>
        <button onClick={checkout} className="button-1">Proceed to Buy</button>
      </div>
    </div>
  );
}




export default Cart;