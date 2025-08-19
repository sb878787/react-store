import React from "react";
import Button from "../button/Button";

function CartItem() {
  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      <img
        className="rounded w-28"
        src="https://cdn.besparto.ir/upload/posts/2025-02-06/10751aca6867c03f85759f1fc438a062.webp"
        alt="product-photo"
      />

      <div className="mr-4">
        <h3 className="text-right">عنوان محصول</h3>

        <div className="mt-2">
          <Button variant="danger" className="mr-2">
            حذف
          </Button>

          <Button variant="primary">+</Button>
          <span className="mx-2">{2}</span>
          <Button variant="primary">-</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
