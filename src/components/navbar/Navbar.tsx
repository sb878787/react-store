import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Navbar() {
  const { cartQty } = useShoppingCartContext();

  return (
    <div className="h-8 border-b shadow flex items-center">
      <Container>
        <div className="flex flex-row-reverse justify-between items-center">
          <ul className="flex flex-row-reverse">
            <li className="ml-4">
              <Link to="/">خانه</Link>
            </li>
            <li className="ml-4">
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>

          <div>
            <Link to="/cart">
              <button>سبد خرید</button>
              
              {cartQty > 0 && (
                <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs ml-1">
                  {cartQty}
                </span>
              )}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
