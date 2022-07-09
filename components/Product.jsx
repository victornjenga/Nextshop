import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className="border p-4 flex flex-col justify-center items-center text-center">
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
          <p className="font-medium text-xl">{name}</p>
          <p className="font-bold text-green-600">Ksh{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
