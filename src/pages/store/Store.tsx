// React Import
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components Import
import ProductItem from "../../components/productItem/ProductItem";
import Container from "../../components/container/Container";

// Types Import
import type { TProducts } from "../../types/products";

// Services Import
import { getProducts } from "../../services/api";

function Store() {
  const [products, setProducts] = useState<TProducts>([]);

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
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductItem {...product} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
