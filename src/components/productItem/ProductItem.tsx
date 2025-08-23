// Types Import
import type { IProduct } from "../../types/products";

function ProductItem({title, price, image, description}: IProduct) {
  return (
    <div className="shadow border rounded pb-2">
      <img className="rounded-t" src={image} alt="product-photo" />

      <div className="flex justify-between px-4 mt-2">
        <h3 className="line-clamp-1 font-bold w-52">{title}</h3>
        <span className="font-bold">{price} تومان</span>
      </div>

      <div className="px-4 mt-2">
        <p className="line-clamp-2 text-left text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
