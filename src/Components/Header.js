import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const navigate = useNavigate();

    const handleUser = () => {

        //Below we unset the user so that the user is redirected to the home page and all the changes in the user details like email and uid will get dismissed, so that we can login again
        dispatch({
            type:"UNSET_USER"
            
        });

        navigate("/");//redirect to the home page
    }


    return (
        <div className="header">

            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />


            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && 'signin'}> {/*If user is not present then redirect to signin page else stay at home page */}
                    <div onClick={handleUser} className="header__option">
                        <span className="header__optionLineOne">Hello, {user ? (user?.email):("Guest")} </span> {/*Display the user id when user is logged in*/}
                        <span className="header__optionLineTwo">{user?.uid ? "Sign Out":"Sign In"}</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>



                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="/cart" >
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;