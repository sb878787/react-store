import React, { useEffect, useState } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import type { IProduct } from "../../types/products";

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-right mt-5">جدید ترین محصولات</h1>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {products.map((product: IProduct) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductItem />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
