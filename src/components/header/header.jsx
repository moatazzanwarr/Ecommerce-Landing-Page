// Imports
import React from "react";
import './header.css'
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png"

// Icons
import icons from "../../assets/icons";


function Header() {
  return (
    <header>
      <div class="top">
        <nav>
          <ul>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">My Account</Link>
            </li>
            <li>
              <Link to="#">Wishlist</Link>
            </li>
            <li>
              <Link to="#">Order Tracking</Link>
            </li>
          </ul>
        </nav>
        <p class="center">
          100% Secure delivery without contacting the courier
        </p>

        <div class="right">
          <p>
            Need help? Call Us:<span>+ 1800 900</span>
          </p>
          <div>
            <select name="lang" id="">
              <option value="eng">English</option>
              <option value="eng">English</option>
              <option value="eng">English</option>
            </select>
            <select name="country" id="">
              <option value="eng">USD</option>
              <option value="eng">USD</option>
              <option value="eng">USD</option>
            </select>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <img src={Logo} alt="Logo" />
        </div>

        <div class="center">
          <select name="All Categories" id="">
            <option value="All Categories">All Categories </option>
            <option value="">All Categories</option>
            <option value="">All Categories</option>
          </select>

          <div>
            <input type="text" placeholder="Search for items..." />
            <button>
              <icons.SearchIcon className="i"/>
            </button>
          </div>
        </div>

        <div class="right">
          <div>
            <icons.LocationOnIcon className="i"/>
            <select name="" id="">
              <option value="egypt">Egypt</option>
              <option value="egypt">Egypt</option>
              <option value="egypt">Egypt</option>
            </select>
          </div>
          <ul>
            <li>
                <icons.CachedIcon className="i"/>
                <span>Compare</span>
            </li>
            <li>
              <icons.FavoriteBorderIcon className="i"/>
              <span>Wishlist</span>
            </li>
            <li>
              <icons.ShoppingCartCheckoutIcon className="i"/>
              <span>Cart</span>
            </li>
            <li>
              <icons.PersonOutlineIcon className="i"/>
              <span>Account</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pages">
            <div>
                <div>
                    <div>
                        <icons.WindowIcon className="i"/>
                        <span>Browse</span>
                    </div>
                    <select name="" id="">
                        <option value="All Categories">All Categories</option>
                        <option value="All Categories">All Categories</option>
                        <option value="All Categories">All Categories</option>
                    </select>
                </div>
    
                <div>
                    <icons.WhatshotIcon className="i"/>
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
                    <NavLink to="#">About</NavLink>
                </div>
    
                <div>
                    <select name="" id="">
                        <option value="shop">Shop</option>
                        <option value="shop">Shop</option>
                        <option value="shop">Shop</option>
                    </select>
                </div>
    
                <div>
                    <select name="" id="">
                        <option value="vendors">Vendors</option>
                        <option value="vendors">Vendors</option>
                        <option value="vendors">Vendors</option>
                    </select>
                </div>
    
                <div>
                    <select name="" id="">
                        <option value="mega menu">Mega menu</option>
                        <option value="mega menu">Mega menu</option>
                        <option value="mega menu">Mega menu</option>
                    </select>
                </div>
    
                <div>
                    <select name="" id="">
                        <option value="blog">Blog</option>
                        <option value="blog">Blog</option>
                        <option value="blog">Blog</option>
                    </select>
                </div>
    
                <div>
                    <select name="" id="">
                        <option value="pages">Pages</option>
                        <option value="pages">Pages</option>
                        <option value="pages">Pages</option>
                    </select>
                </div>
    
                <div>
                    <NavLink to="#">Contact</NavLink>
                </div>
            </div>

            <div>
                <icons.SupportAgentIcon className="i"/>
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
