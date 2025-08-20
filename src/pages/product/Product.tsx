import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { getProductById } from "../../services/api";
import type { IProduct } from "../../types/products";

function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();

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
              <Button className="mt-2 w-full rounded py-3" variant="primary">
                افزودن به سبد خرید
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
