import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

function Product() {
  const params = useParams();

  return (
    <div>
      <Container>
        <div className="shadow mt-4 grid grid-cols-12">
          <div className="col-span-10 p-4">
            <h1 className="text-right">عنوان محصول</h1>

            <div>
                <p className="text-right">قیمت: 20 تومان</p>

                <p className="text-right">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                </p>
            </div>
          </div>

          <div className="col-span-2 p-4 bg-sky-200">
            <img
              className="rounded"
              src="https://cdn.besparto.ir/upload/posts/2025-02-06/10751aca6867c03f85759f1fc438a062.webp"
              alt="product-photo"
            />

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
