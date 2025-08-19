import React from "react";

function ProductItem() {
  return (
    <div className="shadow border rounded pb-2">
      <img className="rounded-t" src="https://cdn.besparto.ir/upload/posts/2025-02-06/10751aca6867c03f85759f1fc438a062.webp" alt="product-photo" />

      <div className="flex flex-row-reverse justify-between px-4 mt-2">
        <h3>عنوان محصول</h3>
        <span>55$</span>
      </div>

      <div className="px-4 mt-2">
        <p className="line-clamp-2 text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
