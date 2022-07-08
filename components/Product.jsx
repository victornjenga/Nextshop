import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className="">
      {" "}
      <Link href={`/product/${slug.current}`}>
        <div className=" cursor-pointer hover:scale-105  duration-300  text-[#324d67]">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className=""
            alt=""
          />
          <p className="">{name}</p>
          <p className="">Ksh{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
