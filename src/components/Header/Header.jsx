import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { addTotalProducts } from '../../redux/actions';
function Header() {
 // const dispatch = useDispatch();
  const proDuctQuantity = useSelector((state) => state.cart.products);
  const total = proDuctQuantity.reduce((prev, next) => prev + next.quantity, 0);
  console.log(total);
  return (
    <header className="header">
      <div className="header__navbar">
      <Link to="/" className="link-decor"><p className="header__navbar-link">Каталог</p></Link>
      <Link to="/cart" className="link-decor cart-position">
      <button className="header__cart" >

          <p
            className={`header__cart-total ${total > 0 ? 'header__cart-total_enabled' : ''}`}>
            {total}
          </p>

          </button>
          </Link>
      </div>
    </header>
  );
}

export default Header;
