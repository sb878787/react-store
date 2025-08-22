import React, { use, useEffect, useState } from "react";
import Button from "../button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { getProductById } from "../../services/api";
import type { IProduct } from "../../types/products";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getProductById(id).then((product) => {
      setProduct(product);
    });
  }, []);

  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      <Link to={`/products/${id}`}>
        <img
          className="rounded w-28"
          src={product?.image}
          alt="product-photo"
        />
      </Link>

      <div className="mr-4 flex flex-col items-end">
        <h3 className="text-right">{product?.title}</h3>

        <div className="mt-2">
          <Button
            variant="danger"
            className="mr-2"
            onClick={() => handleRemoveProduct(parseInt(id.toString()))}
          >
            حذف
          </Button>

          <Button
            variant="primary"
            onClick={() => handleIncreaseProductQty(parseInt(id.toString()))}
          >
            +
          </Button>

          <span className="mx-2">{qty}</span>

          <Button
            variant="primary"
            onClick={() => handleDecreaseProductQty(parseInt(id.toString()))}
          >
            -
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
