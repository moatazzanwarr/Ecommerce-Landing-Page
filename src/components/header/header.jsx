// Imports
import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";

// Icons
import icons from "../../assets/icons";

// Cart

function Header({ openCart }) {
  const cartLength = localStorage.getItem("length");

  return (
    <header className="headerPC">

      <div class="bottom">
        <div class="left">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div class="center">
          <div>
            <input type="text" placeholder="Search for items..." />
            <button>
              <icons.SearchIcon className="i" />
            </button>
          </div>
        </div>

        <div class="right">
          <div>
            <icons.LocationOnIcon className="i" />
            <select name="" id="">
              <option value="egypt">Egypt</option>
              <option value="egypt">Egypt</option>
              <option value="egypt">Egypt</option>
            </select>
          </div>
          <ul>
            <li>
              <icons.CachedIcon className="i" />
              <span>Compare</span>
            </li>
            <li>
              <Link to="">
                <icons.FavoriteBorderIcon className="i" />
                <span>Wishlist</span>
              </Link>
            </li>
            <li className="cart" onClick={openCart}>
              <Link to="/cart">
                <icons.ShoppingCartCheckoutIcon className="i" />
                <span>Cart</span>
                <span className="cartCounter">{cartLength}</span>
              </Link>
            </li>
            <li>
              <icons.PersonOutlineIcon className="i" />
              <span>Account</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pages">
        <div>
          <div>
            <div>
              <icons.WindowIcon className="i" />
              <span>Browse</span>
            </div>
            <select name="" id="">
              <option value="All Categories">All Categories</option>
              <option value="All Categories">All Categories</option>
              <option value="All Categories">All Categories</option>
            </select>
          </div>

          <div>
            <icons.WhatshotIcon className="i" />
            <span>Deals</span>
          </div>

          <div>
            <select name="" id="">
              <option value="home">Home</option>
              <option value="home">Home</option>
              <option value="home">Home</option>
            </select>
          </div>

          <div>
            <NavLink to="/about">About</NavLink>
          </div>

          <div>
          <NavLink to="/shop">Shop</NavLink>
          </div>

          <div>
            <select name="" id="">
              <option value="vendors">Vendors</option>
              <option value="vendors">Vendors</option>
              <option value="vendors">Vendors</option>
            </select>
          </div>

          <div>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>

        <div>
          <icons.SupportAgentIcon className="i" />
          <div>
            <h4>1900 - 888</h4>
            <span>24/7 Support Center</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
