import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const products = useSelector((state) => state.cart.products);
  const totalQuantity = products.reduce(
    (prev, next) => prev + next.quantity,
    0
  );
  return (
    <header className="header">
      <div className="header__navbar">
        <Link to="/" className="link-decor">
          <p className="header__navbar-link">Каталог</p>
        </Link>
        <Link to="/cart" className="link-decor cart-position">
          <button className="header__cart">
            <p
              className={`header__cart-total ${
                totalQuantity > 0 ? 'header__cart-total_enabled' : ''
              }`}
            >
              {totalQuantity}
            </p>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
