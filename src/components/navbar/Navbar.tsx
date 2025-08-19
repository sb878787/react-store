import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";

function Navbar() {
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
            <button>سبد خرید</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
