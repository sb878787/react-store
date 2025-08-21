import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { getProductById } from "../../services/api";
import type { IProduct } from "../../types/products";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();

  const { handleIncreaseProductQty, handleDecreaseProductQty, getProductQty } = useShoppingCartContext();

  useEffect(() => {
    getProductById(params.id as string).then((product) => {
      setProduct(product);
    });
  }, []);

  return (
    <div>
      <Container>
        <div className="shadow mt-4 grid grid-cols-12">
          <div className="col-span-10 p-4">
            <h1 className="text-right">{product?.title}</h1>

            <div>
              <p className="text-right">قیمت: {product?.price} تومان</p>

              <p className="text-right">{product?.description}</p>
            </div>
          </div>

          <div className="col-span-2 p-4 bg-sky-200">
            <img className="rounded" src={product?.image} alt="product-photo" />

            <div>
              {getProductQty(parseInt(params.id as string)) === 0 ? (
                <Button
                  className="mt-2 w-full rounded py-3 cursor-pointer"
                  variant="primary"
                  onClick={() =>
                    handleIncreaseProductQty(parseInt(params.id as string))
                  }
                >
                  افزودن به سبد خرید
                </Button>
              ) : (
                <div className="grid grid-cols-3">
                  <Button
                    className="mt-2 w-full rounded py-3 cursor-pointer"
                    variant="primary"
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    +
                  </Button>

                  <span className="flex items-center justify-center">
                    {getProductQty(parseInt(params.id as string))}
                  </span>

                  <Button
                    className="mt-2 w-full rounded py-3 cursor-pointer"
                    variant="primary"
                    onClick={() =>
                      handleDecreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    -
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
