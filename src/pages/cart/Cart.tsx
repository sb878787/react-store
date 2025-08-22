import React from "react";
import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <div>
      <Container>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="bg-gray-200 rounded p-6">
          <p className="text-right">قیمت کل: 2000</p>
          <p className="text-right">قیمت تخفیف: 200</p>
          <p className="text-right">قیمت نهایی: 1800</p>
        </div>

        <Button className="mt-2" variant="success">
          ثبت سفارش
        </Button>
      </Container>
    </div>
  );
}

export default Cart;
